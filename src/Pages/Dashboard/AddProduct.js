import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>

            <form className=' ' onSubmit={handleSubmit(onSubmit)}>
                <div >
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "name is required"
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt  text-error">{errors.name.message}</span>}
                    </label>

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "email is required"
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'provide a valid email'
                            }
                        })} />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt  text-error">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt  text-error">{errors.email.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} class="select input-bordered w-full max-w-xs">



                    </select>
                    {/* <input type="text" placeholder="Your specialization" className="input input-bordered w-full max-w-xs"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "password is required"
                            },
                        })} /> */}
                    {/* <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt  text-error">{errors.password.message}</span>}
                    </label> */}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "image is required"
                            }
                        })} />
                    <label className="label">
                        {errors.file?.type === 'required' && <span className="label-text-alt  text-error">{errors.file.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Doctor" />
            </form>


        </div>
    );
};

export default AddProduct;