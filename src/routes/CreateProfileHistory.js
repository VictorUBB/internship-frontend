import react from 'react'

function AddRight({right}){
    return (
        <div>
        <label>{right}</label><br/>
        </div>
    )
}
export default function CreateProfileHistory({profile}){
    let rights=[]
    let profileRigts=profile.rights;
    profileRigts.forEach(function(right){
        rights.push(<AddRight right={right}/>)
    })
    return (
        <div>
            <h2>History</h2>
            <h3>Profile</h3>
            <table className="center">
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Type</th>
                </tr>
                <tr>
                    <td>{profile.id}</td>
                    <td>{profile.name}</td>
                    <td>{profile.status}</td>
                    <td>{profile.type}</td>
                </tr>
            </tbody>
            </table>
            <h3>Rights</h3>
            {rights}
        </div>
    )
}
