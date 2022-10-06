import React, { useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useNavigate, useLocation } from 'react-router-dom';
import useToken from './../../Hooks/useToken';



const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userF, loadingF, errorF] = useSignInWithFacebook(auth);
    const [signInWithGithub, userH, loadingH, errorH] = useSignInWithGithub(auth);

    const [token] = useToken(userG || userF || userH);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }

    }, [token, from, navigate])



    let errorElement;
    if (errorG || errorF || errorH) {
        errorElement = <p className='text-error'>{errorG?.message}{errorF?.message}{errorH?.message}</p>
    }
    return (
        <div className='card-body'>
            <div className="divider">OR</div>
            {errorElement}


            <button onClick={() => signInWithGoogle()} className='btn'>
                <FcGoogle className='pr-2 text-3xl' />
                continue With Google
            </button>

            <button onClick={() => signInWithGithub()} className='btn btn-accent'>
                <AiFillGithub className='pr-2 text-3xl' />
                continue With github
            </button>

            <button onClick={() => signInWithFacebook()} className='btn btn-primary'>
                <BsFacebook className='pr-2 text-3xl' />
                continue With Facebook
            </button>

        </div>
    );
};

export default SocialLogin;