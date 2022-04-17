import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import NavTop from '../../Shared/NavTop/NavTop';
import Product from './Product/Product';


const Products = () => {
    const[products, setProducts]= useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    } ,[])
    return (
        <div className='product-main'>
            <NavTop/>
            <Navigation/>
            <div className="container my-5">
            <div className="product-title text-center py-3">
            <h2> Feature Products</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
                {
                    products.map(product=><Product
                        key={product._id}
                        product={product} ></Product>)
                }
            </div>
        </div>
        <Footer/>
        </div>
    );
};
export default Products;