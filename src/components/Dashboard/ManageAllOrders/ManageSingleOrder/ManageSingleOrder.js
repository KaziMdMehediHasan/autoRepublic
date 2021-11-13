import React from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

const ManageSingleOrder = (props) => {
    // console.log(props);
    const {name, contact, address, _id, status} = props.order;
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

    const handleShip =(id)=>{
        const order = {id};
        console.log(order);

        fetch("https://calm-earth-69765.herokuapp.com/orders/update",{
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                alert("Order has been shipped to destination");
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
        <td className="text-light">
            <span className="table-span">Order Status :</span> {status}
        </td>
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
             <button onClick={()=>{handleShip(_id)}} class="btn btn-info">
                 Ship
             </button>
        </td>
        </tr>
    );
};

export default ManageSingleOrder;