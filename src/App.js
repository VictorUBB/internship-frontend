import "./App.css";
import Sidebar from "./Sidebar";
import { useEffect, useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WaitingUsers from "./routes/waitingApprovals/WaitingUsers"
import WaitingProfiles from "./routes/waitingApprovals/WaitingProfiles"
import GetAudit from "./routes/Audit.js"
import { GetAudits } from "./utils/rest-calls";
function App() {
  const [audits, setAudits] = useState([""])
  useEffect(()=>{
    console.log('use effect');
    GetAudits().then(audits=>setAudits(audits));
  },[])
return (
	<Router>
	<Sidebar />
	<Routes>
		<Route path='/audit' element={<GetAudit audits={audits}/>} />
    <Route path='/waiting/users' element={<WaitingUsers/>}/>
    <Route path='/waiting/profiles' element={<WaitingProfiles/>}/>
	</Routes>
	</Router>
);
}

export default App;
