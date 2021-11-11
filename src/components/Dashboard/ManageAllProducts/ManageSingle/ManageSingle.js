import React from 'react';

const ManageSingle = (props) => {
    const{carName, carBrand, mileage, _id, price, year} = props.product;

    const handleDelete =(id)=>{
        console.log(id);
        fetch(`http://localhost:5000/products/${id}`,{
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
        <td>{carBrand}</td>
        <td>{year}</td>
        <td>{mileage}</td>
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
        </td>
        </tr>
    );
};

export default ManageSingle;