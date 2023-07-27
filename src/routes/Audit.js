import React from "react";
import './Audit.css'

export const Audit = () => {
    return (
        <div className="header">
        <h1>Audit and History</h1>
        </div>
    );
    };

function ShowRow({audit}){
    return (
        <tr>
            <td>{audit.id}</td>
            <td>{audit.operation}</td>
            <td>{audit.timeStamp}</td>
            <td><button>History</button></td>
        </tr>
    )
}
export default function GetAudit({audits}){
    console.log("In UserTable");
    console.log(audits);
    let rows = [];
    // let functieStergere=deleteFunc;
    audits.forEach(function(audit) {
        rows.push(<ShowRow audit={audit} key={audit.id} />);
    });
    return (
        <div>
        <div className="header">
        <h1>Audit and History</h1>
        </div>
        <div className="AuditTable">

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
        </div>
    );
} 


