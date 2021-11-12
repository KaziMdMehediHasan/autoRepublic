import React from 'react';

const SingleOrder = (props) => {
    // console.log(props.order);
    const {name, contact, address, _id,status} = props.order;
    const {carName,price} = props.order.product;

    const handleDelete =(id)=>{
        console.log(id);
        fetch(`http://localhost:5000/orders/${id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('Order Cancelled');
            }
            console.log(data);
        })
    }
    return (
        <tr>
        <td>{carName}</td>
        <td>{price}</td>
        <td>{name}</td>
        <td>{address}</td>
        <td>{contact}</td>
        <td>{status}</td>
        <td>
            <button 
            onClick={()=>{
                if(window.confirm("Are you sure you want to delete?")){
                    handleDelete(_id);
                }
            }}
             class="btn btn-danger">
                 Cancel Order
             </button>
        </td>
        </tr>
    );
};

export default SingleOrder;