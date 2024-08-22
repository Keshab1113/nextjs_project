import React from 'react'

const UserProfile = ({params}:any) => {
    return (
        <div>
            <h1>Profile Page</h1>
            <hr />
            <h1>User Id: {params.id}</h1>
        </div>
    )
}

export default UserProfile
