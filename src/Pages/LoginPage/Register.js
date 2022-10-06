import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import SocialLogin from './../SharePages/SocialLogin';
import useToken from './../../Hooks/useToken';


const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const [token] = useToken(user)


    if (token) {
        navigate('/')
    }

    let errorElement;
    errorElement = <p className='text-error'>{error?.message}</p>

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        alert('Updated profile');

        console.log(data)
    };

    return (
        <div className='flex min-h-screen  justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-2xl font-bold text-secondary text-blue-700'>Please Register</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "name is required"
                                }
                            })} // custom message
                        />
                        <label className='label'>
                            {errors.email?.type === "required" && <span className='text-error label-text-alt'>{errors.email.message}</span>}
                            {errors.email?.type === "pattern" && <span className='text-error label-text-alt'>{errors.email.message}</span>}
                        </label>

                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs"
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


                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs"
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


                        <input className='btn btn-secondary w-full max-w-xs' type="submit" value='Register' />
                    </form>
                    {errorElement}

                    <p className='font-bold '>Already Have an Account? <Link className='text-primary' to='/login'>Please Login</Link></p>

                    <SocialLogin></SocialLogin>


                </div>
            </div>
        </div>

    );
};

export default Register;