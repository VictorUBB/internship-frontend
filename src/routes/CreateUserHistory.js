import react from 'react'

function CreateUserHistory({user}){
    return (
        <div>
            <h2>History</h2>
            <table className="center">
            <tbody>
            <tr>
                <th>Id</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Username</th>
            </tr>
            <tr>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.status}</td>
                <td>{user.username}</td>
            </tr>
            </tbody>
        </table>
        </div>

    )
}

export default CreateUserHistory;