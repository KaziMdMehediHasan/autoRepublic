import React from 'react';
import { Link } from 'react-router-dom';

const ManageSingleOrder = (props) => {
    // console.log(props);
    const {name, contact, address, _id, status} = props.order;
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

    const handleShip =(id)=>{
        const order = {id};
        console.log(order);

        fetch("http://localhost:5000/orders/update",{
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                alert("Order has been shipped for destination");
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
             {/* <Link to={`updateOrder/${_id}`}>
               <button class="btn btn-primary">Update</button>
             </Link> */}
             <button onClick={()=>{handleShip(_id)}} class="btn btn-primary">
                 Ship
             </button>
        </td>
        </tr>
    );
};

export default ManageSingleOrder;