import Sidebar from "./Sidebar";
import { useEffect, useState } from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate, useSearchParams} from "react-router-dom";
import { useLocation } from "react-router-dom";
import Login from "./Login";
import CreateUserHistory from './routes/CreateUserHistory.js'
import CreateProfileHistory from './routes/CreateProfileHistory.js'
import WaitingUsers from "./routes/waitingApprovals/WaitingUsers"
import WaitingProfiles from "./routes/waitingApprovals/WaitingProfiles"
import GetAudit from "./routes/Audit.js"
import ReactDOM from "react-dom";
import CreateUser  from "./routes/createEntitys/CreateUser";
import CreateProfile from "./routes/createEntitys/CreateProfile";
import { GetAudits,GetHistoryByAuditId,GetProfileById,GetUserById,GetAllProfiles,AddNewProfile } from "./utils/rest-calls";

const MainPage = () => {
   const [audits, setAudits] = useState([]);
   const location = useLocation(); // Use the useLocation hook to access location
   const user = location.state?.user;
 
   console.log("Logged in userMAINPAGE:", user);
   useEffect(() => {
     GetAudits().then((audits) => setAudits(audits));
   }, []);

  const [profiles,setProfiles]=useState([""])
  useEffect(()=>{
    GetAllProfiles().then(profiles=>setProfiles(profiles))
  },[])
  const renderProfileHistory = (profileData, elementId) => {
    ReactDOM.render(
      <CreateProfileHistory profile={profileData} />,
      document.getElementById(elementId)
    );
  };

  const renderUserHistory = (userData, elementId) => {
    ReactDOM.render(
      <CreateUserHistory user={userData} />,
      document.getElementById(elementId)
    );
  };
function getHistoryById(id){
  console.log('get function for history');
  var elm=document.getElementById('historyColumn');

  GetHistoryByAuditId(id)
  .then(hist => {
    console.log('Fetched history:', hist);
    if(hist.typeEntity=="Profile"){
      GetProfileById(hist.idEntity).then(
        profileData=>{
          renderProfileHistory(profileData,'historyColumn')
        }
      )
      
    }
    else{
     GetUserById(hist.idEntity).then(
        userData=>{
          renderUserHistory(userData,'historyColumn')
        }
      )
    }
    
  })
  .catch(error => {
    console.error('Error fetching history:', error);
  });
}

   return (
     <div>
       <Sidebar/>
       <Routes>
       <Route path="/mainPage/*" element={<MainPage/>}/>
		<Route path='/audit' element={<GetAudit audits={audits} getFunction={getHistoryById}/>} />
    <Route path='/waiting/users' element={<WaitingUsers/>}/>
    <Route path='/waiting/profiles' element={<WaitingProfiles/>}/>
    <Route path="/create/users" element={<CreateUser profiles={profiles} currentUser={user} addFunction={AddNewProfile}/>}/>
    <Route path="/create/profile" element={<CreateProfile/>}/>
       </Routes>
     </div>
   );
 };

export default MainPage;