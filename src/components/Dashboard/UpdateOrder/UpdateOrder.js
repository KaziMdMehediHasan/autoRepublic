import React from 'react';
import { useParams } from 'react-router';

const UpdateOrder = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Update Order {id}</h1>
        </div>
    );
};

export default UpdateOrder;