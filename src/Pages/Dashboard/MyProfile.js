import React from 'react';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import "react-phone-number-input/style.css";
import { useState } from 'react';
import { useQuery } from 'react-query';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [profile, setProfile] = useState({});
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const { email } = user;

    // console.log(user.address);
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://secret-cove-53846.herokuapp.com/user/${email}`, {
        method: "GET",
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/')

        }

        return res.json()

    }))
    // console.log(users.address)




    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const handleValidate = (value) => {
        const isValid = isValidPhoneNumber(value);
        // console.log({ isValid })
        return isValid
    }

    const onSubmit = (data) => {

        // console.log(data);
        fetch(`https://secret-cove-53846.herokuapp.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Your profile updated successfully')
            })

    };


    return (
        <div className='mx-20 mt-12'>
            <div className='flex items-center mb-12'>
                <div className="avatar">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt='profile' />
                    </div>
                </div>

                <div className='ml-4'>
                    <h3 className='font-bold text-2xl'>{user.displayName}</h3>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='form-control w-full max-w-xs'>

                    <input type='email' className='input input-bordered w-full max-w-xs' value={user.email} placeholder="your email"
                        {...register("email")} />


                    {/* ===================================================================== */}


                    <Controller
                        name="phoneInput"


                        control={control}
                        rules={{
                            validate: (value) => handleValidate(value)
                        }}
                        render={({ field: { onChange, value } }) => (
                            <PhoneInput className='input input-bordered w-full max-w-xs mt-8' name='phoneNumber'
                                placeholder='phone number'
                                value={users?.phoneInput}
                                onChange={onChange}
                                defaultCountry="TH"
                                id="phoneInput"
                            />
                        )}
                    />
                    {errors["phoneInput"] && (
                        <p className="text-error">Invalid Phone</p>
                    )}


                    {/* ========================================================== */}

                    <input className='input input-bordered w-full max-w-xs mt-8' defaultValue={users?.address} type="text" name='address' placeholder='type your Address' {...register("address",
                        {
                            required: {
                                value: true,

                            },

                            maxLength: {
                                value: 100,
                                message: "Your address is too long"
                            },
                            minLength: {
                                value: 20,
                                message: "Your address is too short"
                            }
                        })} />


                    <label >
                        {errors.address?.type === "minLength" && <span className='text-error'>{errors.address?.message}</span>}
                        {errors.address?.type === "maxLength" && <span className='text-error'>{errors.address?.message}</span>}
                    </label>

                </div>

                <input className='btn btn-primary mt-8 w-32' type="submit" value='Save' />
            </form>

        </div>
    );
};

export default MyProfile;