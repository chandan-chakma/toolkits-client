import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import SocialLogin from './../SharePages/SocialLogin';
import Loading from '../SharePages/Loading/Loading';
import { toast } from 'react-toastify';
import useToken from './../../Hooks/useToken';



const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [token] = useToken(user);





    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }

    }, [token, from, navigate])


    if (loading) {
        return <Loading></Loading>
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-error'>{error?.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)

        console.log("data", data)


    };

    const resetPassword = async (data) => {
        const email = watch('email')
        // console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('sent email')
        }
        else {
            toast("enter your email")
        }

    }


    return (
        <div className='flex min-h-screen  justify-center items-center my-12'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-2xl font-bold text-secondary text-blue-700'>Please Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type="email" autoComplete="on" placeholder="Enter your email" className="input input-bordered w-full max-w-xs"
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
                            {errors.email?.type === "required" && <span className='text-error label-text-alt'>{errors.email?.message}</span>}
                            {errors.email?.type === "pattern" && <span className='text-error label-text-alt'>{errors.email?.message}</span>}
                        </label>


                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" autoComplete="on" placeholder="Enter your password" className="input input-bordered w-full max-w-xs"
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
                            {errors.password?.type === "required" && <span className='text-error label-text-alt'>{errors.password?.message}</span>}
                            {errors.password?.type === "minLength" && <span className='text-error label-text-alt'>{errors.password?.message}</span>}

                        </label>


                        <input className='btn btn-secondary w-full max-w-xs' type="submit" value='Login' />
                    </form>
                    {errorElement}
                    <button onClick={resetPassword} className='w-44 btn btn-accent'>Forget Password</button>
                    <p className='font-bold '>New to ToolKits? <Link className='text-primary' to='/register'>Create New Account</Link></p>

                    <SocialLogin></SocialLogin>
                </div>



            </div>
        </div>






    );
};

export default Login;