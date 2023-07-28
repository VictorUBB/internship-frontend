import React from "react";
import './Audit.css'
import Sidebar from "../Sidebar";

// export const Audit = () => {
//     return (
//         <div className="header">
//         <h1>Audit and History</h1>
//         </div>
//     );
//     };

function ShowRow({audit,getFunction}){
    function getHistoryById(event){
        console.log('get history fot id of audit'+audit.id);
        getFunction(audit.history.id);
    }
    return (
        <tr>
            <td>{audit.id}</td>
            <td>{audit.operation}</td>
            <td>{audit.timeStamp}</td>
            <td><button onClick={getHistoryById}>History</button></td>
        </tr>
    )
}
export default function GetAudit({audits,getFunction}){
    console.log("In UserTable");
    console.log(audits);
    let rows = [];
    // let functieStergere=deleteFunc;
    audits.forEach(function(audit) {
        rows.push(<ShowRow audit={audit} key={audit.id} getFunction={getFunction}/>);
    });
    return (
        <div>
            <Sidebar/>
            <div className="header">
                <h1>Audit and History</h1>
            </div>
            
            <div className="tables">
                <div className="AuditTable">
                    <h2>
                        Audit
                    </h2>
                    <table className="center">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Operation</th>
                            <th>TimeStamp</th>
                        </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>

                </div>
                <div id="historyColumn">
                    <h2>
                        History
                    </h2>
                </div>
            </div>
        </div>
    );
} 


