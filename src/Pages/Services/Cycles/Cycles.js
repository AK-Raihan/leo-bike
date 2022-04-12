import React, { useEffect, useState } from 'react';
import Cycle from './Cycle/Cycle';

const Products = () => {
    const[cycles, setCycles]= useState([]);

    useEffect( ()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setCycles(data))
    } ,[])

    return (
        <div className='product-main py-5'>
            <div className="container my-5">
            <div className="product-title text-center py-3">
            <h5 className=""> Our Services </h5>
            <h1> What We’re Offering</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
                {
                    cycles.map(cycle=><Cycle
                        key={cycle._id}
                        cycle={cycle} ></Cycle>)
                }
            </div>
        </div>
        </div>
    );
};

export default Products;