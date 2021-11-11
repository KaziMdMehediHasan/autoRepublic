import React from 'react';

const SingleOrder = (props) => {
    console.log(props.order);
    const {name, contact, address} = props.order;
    const {carName,price} = props.order.product;
    return (
        <tr>
        <td>{carName}</td>
        <td>{price}</td>
        <td>{name}</td>
        <td>{address}</td>
        <td>{contact}</td>
        <td><button class="btn btn-danger">Cancel Order</button></td>
        </tr>
    );
};

export default SingleOrder;