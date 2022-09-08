import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex h-screen  justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className='text-2xl font-bold text-secondary text-blue-700'>Please Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label class="label">
                            <span class="label-text">Email</span>

                        </label>
                        <input type="email" placeholder="Enter your email" class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "email is required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "Please provide a valid email"
                                }
                            })} // custom message
                        />
                        <label className='label'>
                            {errors.email?.type === "required" && <span className='text-error label-text-alt'>{errors.email.message}</span>}
                            {errors.email?.type === "pattern" && <span className='text-error label-text-alt'>{errors.email.message}</span>}
                        </label>


                        <label class="label">
                            <span class="label-text">Password</span>

                        </label>
                        <input type="password" placeholder="Enter your password" class="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Must be 6 character or longer"
                                }
                            })} // custom message
                        />
                        <label className='label'>
                            {errors.password?.type === "required" && <span className='text-error label-text-alt'>{errors.password.message}</span>}
                            {errors.password?.type === "minLength" && <span className='text-error label-text-alt'>{errors.password.message}</span>}

                        </label>


                        <input className='btn btn-secondary w-full max-w-xs' type="submit" value='Login' />
                    </form>

                    <p className='font-bold '>New to ToolKits? <Link className='text-primary' to='/register'>Create New Account</Link></p>

                    <div class="divider">OR</div>


                    <button className='btn'>
                        <FcGoogle className='pr-2 text-3xl' />
                        continue With Google
                    </button>

                    <button className='btn btn-accent'>
                        <AiFillGithub className='pr-2 text-3xl' />
                        continue With github
                    </button>

                    <button className='btn btn-primary'>
                        <BsFacebook className='pr-2 text-3xl' />
                        continue With Facebook
                    </button>

                </div>
            </div>
        </div>






    );
};

export default Login;