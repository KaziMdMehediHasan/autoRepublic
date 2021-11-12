import React from 'react';

const SingleOrder = (props) => {
    // console.log(props.order);
    const {name, contact, address, _id,status} = props.order;
    const {carName,price} = props.order.product;

    const handleDelete =(id)=>{
        console.log(id);
        fetch(`https://calm-earth-69765.herokuapp.com/orders/${id}`,{
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
        <tr className="table-row">
        <td className="text-light"><span className="table-span">Model : </span> {carName}</td>
        <td className="text-light"><span className="table-span">Price : </span> ${price}</td>
        <td className="text-light"><span className="table-span">Customer Name : </span> {name}</td>
        <td className="text-light"><span className="table-span">Address : </span> {address}</td>
        <td className="text-light"><span className="table-span">Contact No : </span> {contact}</td>
        <td className="text-light"><span className="table-span">Contact No : </span> {status}</td>
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