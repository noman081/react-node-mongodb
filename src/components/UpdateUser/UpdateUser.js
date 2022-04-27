import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const url = `http://localhost:5000/user/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };
        console.log(name, email);

        fetch('http://localhost:5000/user', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Data-', data);
                event.target.reset();
            });
    }
    return (
        <div>
            <Link to='/'>Home</Link>
            <h1>Updating User {user.name}</h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="email" name='email' placeholder='Email' required />
                <br />
                <input type="submit" value="Update User" />
            </form>

        </div>
    );
};

export default UpdateUser;