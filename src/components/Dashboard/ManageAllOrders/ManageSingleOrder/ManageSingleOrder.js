import React from 'react';
import { Link } from 'react-router-dom';

const ManageSingleOrder = (props) => {
    // console.log(props);
    const {name, contact, address, _id} = props.order;
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
        <td></td>
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
             <Link to={`updateOrder/${_id}`}>
               <button class="btn btn-primary">Update</button>
             </Link>
        </td>
        </tr>
    );
};

export default ManageSingleOrder;