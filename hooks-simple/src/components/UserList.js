import React from 'react';
import UserResource from './UseResource'
const UserList = () => {
    const users = UserResource('users')
    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;