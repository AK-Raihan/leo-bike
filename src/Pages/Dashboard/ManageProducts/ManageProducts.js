import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';



const ManageAllCar = () => {
    const [loading, setLoading] = useState(true);
    const[products, setProducts]=useState([])
    const { user } = useAuth();

    const email = user.email;
    console.log(email);

    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);


console.log(products)
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
                swal("Are you sure for deleting?");
            }
          });
        console.log(id);
      };
    // CAR UPDATE HANDLER
    const handleUpdate = (id) => {
        console.log(id)
    }
    return (
        <div>
            <div className="text-center">
                <h2>Manage All Products</h2>
                <h4 className='my-3'>Total Products {products.length}</h4>
            </div>
            <table>
                <thead>
                    <tr className='fs-6'>
                        <td className='pe-4'>SL NO.</td>
                        <td >Photo</td>
                        <td>Product Name</td>
                        <td>Price</td>
                        <td>UPDATE</td>
                        <td>DELETE</td>
                    </tr>
                </thead>
                {
                    products.map((product, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td style={{ width: '180px' }}><img src={product.img} style={{ width: '130px', height: '100px', borderRadius: '5px' }} alt="" /> </td>
                                <td>{product.name?.toUpperCase()}</td>
                                <td>{product.price}</td>
                                <td><Button onClick={() => handleUpdate(product._id)} variant="warning bg-warning m-1">Update</Button></td>
                                <td><Button onClick={() => handleDelete(product._id)} variant="danger bg-danger text-light m-1">Delete</Button></td>
                            </tr>
                        </tbody>
                    ))}
            </table>
            <Toaster />
        </div>
    );
};

export default ManageAllCar;