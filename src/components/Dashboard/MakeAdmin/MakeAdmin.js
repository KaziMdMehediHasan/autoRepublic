import React, { useState } from 'react';
import "./MakeAdmin.css";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e=>{
        setEmail(e.target.value);
    }
    const handleMakeAdmin =(e)=>{
        console.log(email);
        const user = {email};
        fetch("https://calm-earth-69765.herokuapp.com/users/admin",{
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.modifiedCount){
                setSuccess(true);
                console.log(data);
            }
        })
        e.preventDefault();
    }
    return (
        <div className="make-admin-parent">
        <div className="make-admin-container">
        <h2 className="text-center" style={{color: '#C8C8C8'}}>Make Admin</h2>
            <form onSubmit={handleMakeAdmin}>
                <div class="mb-3">
                    <label class="form-label text-light">Email address</label>
                    <input
                    onBlur={handleOnBlur}
                     type="email"
                     class="form-control" aria-describedby="emailHelp"/>
                </div>
                {
                success && (
                    <div class="alert alert-success" role="alert">
                        Made Admin Successfully!
                    </div>
                )
            }
                <button type="submit" class="btn btn-primary">Make Admin</button>
            </form>

        </div>
        </div>

    );
};

export default MakeAdmin;