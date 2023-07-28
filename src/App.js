import "./App.css";
import Sidebar from "./Sidebar";
import { useEffect, useState } from 'react'
import CreateUserHistory from './routes/CreateUserHistory.js'
import CreateProfileHistory from './routes/CreateProfileHistory.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WaitingUsers from "./routes/waitingApprovals/WaitingUsers"
import WaitingProfiles from "./routes/waitingApprovals/WaitingProfiles"
import GetAudit from "./routes/Audit.js"
import ReactDOM from "react-dom";
import CreateUser  from "./routes/createEntitys/CreateUser";
import CreateProfile from "./routes/createEntitys/CreateProfile";
import { GetAudits,GetHistoryByAuditId,GetProfileById,GetUserById,GetAllProfiles,AddNewProfile, AddNewUser } from "./utils/rest-calls";
import Login from "./Login";
import MainPage from "./MainPage";
function App() {
  const [audits, setAudits] = useState([""])
  useEffect(()=>{
    console.log('use effect');
    GetAudits().then(audits=>setAudits(audits));
  },[])
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
      GetProfileById(hist.idEntityHistory).then(
        profileData=>{
          renderProfileHistory(profileData,'historyColumn')
        }
      )
      
    }
    else{
     GetUserById(hist.idEntityHistory).then(
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
	
	<Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/mainPage/*" element={<MainPage/>}/>
		<Route path='/audit' element={<GetAudit audits={audits} getFunction={getHistoryById}/>} />
    <Route path='/waiting/users' element={<WaitingUsers/>}/>
    <Route path='/waiting/profiles' element={<WaitingProfiles/>}/>
    <Route path="/create/users" element={<CreateUser profiles={profiles}  addFunction={AddNewUser}/>}/>
    <Route path="/create/profile" element={<CreateProfile addFunction={AddNewProfile}/>}/>
  </Routes>
	</div>
);
}

export default App;
