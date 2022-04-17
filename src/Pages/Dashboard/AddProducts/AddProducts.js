import axios from 'axios';
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';




const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        if (!data.img[0]) {
            return toast.error('Please upload an image!');
        }
        const loading = toast.loading('Uploading...Please wait!')
        let imageURL = "";
        console.log(data)
        if(data.img[0]){
            const imageData = new FormData();
            imageData.set('key', 'acb2d4c7a68ef1bf06d396d73adb600a')
            imageData.append('image', data.img[0]);
            try {
                const res = await axios.post("https://api.imgbb.com/1/upload", imageData);
                console.log(res)
                imageURL = res.data.data.display_url;
                toast.dismiss(loading);
            } catch (error) {
                toast.dismiss(loading);
                return toast.error('Failed to upload the image!');
            }
        }
        const serviceInfo = {
            name: data.name,
            description: data.description,
            price: data.price,
            img: imageURL,
            details: data.details
        }
        console.log(serviceInfo)
        axios.post('http://localhost:5000/product', serviceInfo)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Added', {
                        id: loading,
                    });
                    reset();
                    return swal("Successfully Added!", "Your car has been successfully added.", "success");
                }
            })
    }
    return (
        <div>
            <h2>Add a Product Details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                    <Row>
                        <Col style={{ width: '550px', margin: '0 auto' }} md={12} xs={12} className="pr-md-4">
                            <Row>
                                <Col md={6} sm={12}>
                                    <label>Product Name</label>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        defaultValue=""
                                        {...register("name", { required: true })}
                                       
                                    />
                                </Col>
                                <Col md={6} sm={12}>
                                    <label>Mileage</label>
                                    <input
                                        type="number"
                                        className="our-form-input"
                                        defaultValue=""
                                        {...register("mileage", { required: true })}
                                        
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} sm={12}>
                                    <label>Product Price</label>
                                    <input
                                        className="our-form-input"
                                        type="number"
                                        defaultValue=""
                                        {...register("price", { required: true })}
                                        
                                    />
                                </Col>
                                <Col md={6} sm={12} className='mt-1'>
                                    <label>Product Image</label>
                                    <Button
                                        as={"label"}
                                        htmlFor="upload"
                                        variant="outline-primary"
                                        className="d-block p-2 upload-btn">
                                        Upload Image
                                    </Button>
                                    <input
                                        className="our-form-input"
                                        type="file"
                                        id="upload"
                                        hidden="hidden"
                                        {...register("img")}
                                        
                                    />
                                </Col>
                            </Row>
                            <label>Limit</label>
                            <textarea
                                type="textarea"
                                style={{ height: '150px' }}
                                className="our-form-input"
                                defaultValue=""
                                {...register("description", { required: true })}
                               
                            />
                            <br />
                            
                        </Col>
                    </Row>
                </div>

                <div className="text-center mt-4">
                    <Button type="submit" className="btn-main" style={{ padding: ".68rem 2rem" }}>
                        Submit
                    </Button>
                </div>
                <Toaster />
            </form>
        </div>
    );
};

export default AddProducts;