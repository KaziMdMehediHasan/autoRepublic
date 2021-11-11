import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e=>{
        setEmail(e.target.value);
    }
    const handleMakeAdmin =(e)=>{
        console.log(email);
        const user = {email};
        fetch("http://localhost:5000/users/admin",{
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
        <div>
            <form onSubmit={handleMakeAdmin}>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
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
    );
};

export default MakeAdmin;