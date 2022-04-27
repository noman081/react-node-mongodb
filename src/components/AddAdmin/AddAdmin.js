import React from 'react';
import { Link } from 'react-router-dom';

const AddAdmin = () => {
    const handleAdmin = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const age = event.target.age.value;
        console.log(name, email, age)
        const admin = { name, email, age };
        fetch('http://localhost:5000/admin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }
    return (
        <div>
            <h1>This is Admin</h1>
            <form onSubmit={handleAdmin}>
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="email" name='email' placeholder='Email' required />
                <br />
                <input type="text" name='age' placeholder='Age' />
                <br />
                <input type="submit" value="Add Admin" />
            </form>

            <br />
            <Link to='/'>Home</Link>
        </div>
    );
};

export default AddAdmin;