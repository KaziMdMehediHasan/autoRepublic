import React from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Update Product : {id}</h1>
            <h2>This feature is under development</h2>
        </div>
    );
};

export default UpdateProduct;