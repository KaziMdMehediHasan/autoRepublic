import React from 'react';
import { Link } from 'react-router-dom';
import "./ManageSingle.css";

const ManageSingle = (props) => {
    const{carName, carBrand, mileage, _id, price, year} = props.product;

    const handleDelete =(id)=>{
        console.log(id);
        fetch(`https://calm-earth-69765.herokuapp.com/products/${id}`,{
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
        <td className="text-light"><span className="table-span">Price : </span>{price}</td>
        <td className="text-light"><span className="table-span">Manufacturer : </span>{carBrand}</td>
        <td className="text-light"><span className="table-span">Year : </span>{year}</td>
        <td className="text-light"><span className="table-span">Mileage : </span>{mileage}</td>
        <td>
            <button 
            onClick={()=>{
                if(window.confirm("Are you sure you want to delete?")){
                    handleDelete(_id);
                }
            }}
             class="btn btn-danger">
                 Delete Product
             </button>
             <Link to={`updateProduct/${_id}`}>
               {/* <button
                  class="btn btn-primary"
                  >
                 Update
              </button> */}
             </Link>
 
        </td>
        </tr>
    );
};

export default ManageSingle;