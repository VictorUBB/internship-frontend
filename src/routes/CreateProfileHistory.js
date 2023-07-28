import react from 'react'

export default function CreateProfileHistory({profile}){
    return (
        <div>
        <h2>History</h2>
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
</div>
    )
}
