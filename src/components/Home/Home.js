import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            console.log('Deleting user, ', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining);
                })
        }
    }
    return (
        <div>
            <Link to='/user/add'>Add New user</Link><br />
            <Link to='/admin/add'>Add New Admin</Link>
            <Link to='/admin'>Show Admin</Link>
            <h1>Welcome to MongoDB</h1>
            <h2>I have {users.length} users!</h2>
            <ul>
                {
                    users.map(user => <li key={user._id}>{user.name} || {user.email}
                        <Link to={`/update/${user._id}`}><button>Update</button></Link> <button onClick={() => handleDeleteUser(user._id)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

export default Home;