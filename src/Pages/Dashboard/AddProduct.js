import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const imageStorageKey = '7bcc8a99c4ce0a167ec16030b49463fb';
    const onSubmit = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData

        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tool = {
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        quantity: data.quantity,
                        moq: data.moq,
                        img: img

                    }
                    fetch('http://localhost:5000/tool', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tool)
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data.insertedId) {
                                toast('Your product added successfully');
                                reset();
                            }
                            else {
                                toast('failed to add product');
                            }
                            console.log(data)
                        })


                }
                console.log(result)

            })


    };


    return (
        <div className='mx-32 mt-12'>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='form-control w-full max-w-xs'>
                    <label className='label'>
                        <span className='label-text'>Name</span>
                    </label>
                    <input type='text' className='input input-bordered w-full max-w-xs' placeholder="Product name"
                        {...register("name",
                            {
                                required: {
                                    value: true,
                                    message: "Name is required",
                                },
                                minLength: {
                                    value: 5,
                                    message: "Provide valid name"
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'Your product name is to long'
                                }

                            })} />
                    <label className='label'>

                        {errors.name?.type === 'required' && <span className='label-text-alt text-error'>{errors.name.message}</span>}
                        {errors.name?.type === 'minLength' && <span className='label-text-alt text-error'>{errors.name.message}</span>}
                        {errors.name?.type === 'maxLength' && <span className='label-text-alt text-error'>{errors.name.message}</span>}
                    </label>

                    {/* ===================================================================== */}

                    <label className='label'>
                        <span className='label-text'>Price</span>
                    </label>
                    <input type='number' className='input input-bordered w-full max-w-xs' placeholder="Product price"
                        {...register("price",
                            {
                                required: {
                                    value: true,
                                    message: "price is required",
                                },
                                min: {
                                    value: 10,
                                    message: "Provide standard market price more then $10"
                                }

                            })} />
                    <label className='label'>

                        {errors.price?.type === 'required' && <span className='label-text-alt text-error'>{errors.price.message}</span>}
                        {errors.price?.type === 'min' && <span className='label-text-alt text-error'>{errors.price.message}</span>}
                    </label>

                    {/* ========================================================== */}

                    <label className='label'>
                        <span className='label-text'>Description</span>
                    </label>
                    <input type='text' className='input input-bordered w-full max-w-xs' placeholder="Product description"
                        {...register("description",
                            {
                                required: {
                                    value: true,
                                    message: "description is required",
                                },
                                minLength: {
                                    value: 20,
                                    message: "Description must be at least 3 characters or long "
                                },
                                maxLength: {
                                    value: 250,
                                    message: 'Your product description is to long'
                                }


                            })} />
                    <label className='label'>

                        {errors.description?.type === 'required' && <span className='label-text-alt text-error'>{errors.description.message}</span>}
                        {errors.description?.type === 'minLength' && <span className='label-text-alt text-error'>{errors.description.message}</span>}
                        {errors.description?.type === 'maxLength' && <span className='label-text-alt text-error'>{errors.description.message}</span>}
                    </label>


                    {/* =========================================================================== */}

                    <label className='label'>
                        <span className='label-text'>Quantity</span>
                    </label>
                    <input type='number' className='input input-bordered w-full max-w-xs' placeholder="Product quantity"
                        {...register("quantity",
                            {
                                required: {
                                    value: true,
                                    message: "quantity is required",
                                },
                                min: {
                                    value: 20,
                                    message: "Provide at least 10 quantity of your product"
                                }

                            })} />
                    <label className='label'>

                        {errors.quantity?.type === 'required' && <span className='label-text-alt text-error'>{errors.quantity.message}</span>}
                        {errors.quantity?.type === 'min' && <span className='label-text-alt text-error'>{errors.quantity.message}</span>}
                    </label>

                    {/* ==================================================================== */}

                    <label className='label'>
                        <span className='label-text'>Moq</span>
                    </label>
                    <input type='number' className='input input-bordered w-full max-w-xs' placeholder="Product moq"
                        {...register("moq",
                            {
                                required: {
                                    value: true,
                                    message: "Moq is required",
                                },
                                min: {
                                    value: 10,
                                    message: "Provide at least 10 moq of your product"
                                }

                            })} />
                    <label className='label'>

                        {errors.moq?.type === 'required' && <span className='label-text-alt text-error'>{errors.moq.message}</span>}
                        {errors.moq?.type === 'min' && <span className='label-text-alt text-error'>{errors.moq.message}</span>}
                    </label>

                    {/* ======================================================================== */}

                    <label className='label'>
                        <span className='label-text'>Photo</span>
                    </label>
                    <input type='file' className='w-full max-w-xs' placeholder="Product image"
                        {...register("image",
                            {
                                required: {
                                    value: true,
                                    message: "image is required",
                                },


                            })} />
                    <label className='label'>

                        {errors.image?.type === 'required' && <span className='label-text-alt text-error'>{errors.image.message}</span>}

                    </label>
                </div>



                <input className='btn btn-primary' type="submit" value='Add Product' />
            </form>


        </div>
    );
};

export default AddProduct;