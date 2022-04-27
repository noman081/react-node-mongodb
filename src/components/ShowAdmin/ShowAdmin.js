import React, { useEffect, useState } from 'react';

const ShowAdmin = () => {
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/admin')
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, []);
    return (
        <div>
            <h1>I have {admin.length} admin!</h1>
            <ul>
                {
                    admin.map(ad => <li key={ad._id}>
                        <p>{ad.name}</p>
                        <p>{ad.email}</p>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default ShowAdmin;