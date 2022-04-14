import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';




const MyOrder = () => {
    const[orders, setOrders]=useState([])
    const { user } = useAuth();

    const email = user.email;
    console.log(email);

    useEffect(()=>{
        fetch(`http://localhost:5000/myOrders/${email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[]);

    console.log(orders);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delteOrder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              alert('successfully deleted');
            }
          });
        console.log(id);
      };

    return (
        <div style={{marginBottom:'300px'}}>
            <h6 className='text-center py-4'>Orders: {orders.length}</h6>
            <div className='container' >
                <table className="table">
                    <thead>
                        <tr className="text-start " >
                            <th>User</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date</th>
                            <th scope="col">Product</th>
                            <th className='text-right' scope="col">Status</th>
                            <th className='text-right' scope="col">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map(order => (
                            <tr
                                key={order._id}
                            >
                                <th >
                                    {order.user}
                                </th>
                                <th >{order.email}</th>
                                <th >{order.date}</th>
                                <th >{order.product}</th>
                                <th >{order.status} </th>
                                <button onClick={() => handleDelete(order?._id)} className="btn btn-outline-info">Remove</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;