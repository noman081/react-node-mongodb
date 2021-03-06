import React from 'react';
import { Link } from 'react-router-dom';

const AddUser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };
        console.log(name, email);

        fetch('http://localhost:5000/user', {
            method: 'POST',
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
            <h1>Welcome to my OWN DATA</h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="email" name='email' placeholder='Email' required />
                <br />
                <input type="submit" value="Add User" />
            </form>

            <Link to='/'>Go to Home</Link>
        </div>
    );
};

export default AddUser;