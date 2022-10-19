import React from 'react';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import "react-phone-number-input/style.css";

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = (data, value) => {
        const isValid = isValidPhoneNumber(value);
        console.log({ isValid })
        return isValid;
    };
    return (
        <div className='mx-20 mt-12'>
            <div className='flex items-center'>
                <div class="avatar">
                    <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt='profile' />
                    </div>
                </div>

                <div className='ml-4'>
                    <h3 className='font-bold text-2xl'>{user.displayName}</h3>
                </div>
            </div>

            <form className="user-info-form" onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-12 mb-8'>
                    <input className='input input-bordered w-full max-w-xs' disabled value={user.email} {...register("email", { required: true, maxLength: 20 })} />
                </div>

                {/* ============================================================================  */}
                <div >
                    <label htmlFor="phone-input">Phone Number</label>
                    <Controller
                        name="phone-input"
                        control={control}
                        rules={{
                            validate: (value) => isValidPhoneNumber(value)
                        }}
                        render={({ field: { onChange, value } }) => (
                            <PhoneInput className='input input-bordered w-full max-w-xs'
                                placeholder='phone number'
                                value={value}
                                onChange={onChange}
                                defaultCountry="TH"
                                id="phone-input"
                            />
                        )}
                    />
                    {errors["phone-input"] && (
                        <p className="text-error">Invalid Phone</p>
                    )}


                </div>

                {/* ========================================================================================= */}

                <div>
                    <input className='input input-bordered w-full max-w-xs mt-8' type="text" placeholder='type your Address' {...register("address",
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

                    <div className='mb-8'>
                        <label >
                            {errors.address?.type === "minLength" && <span className='text-error'>{errors.address?.message}</span>}
                            {errors.address?.type === "maxLength" && <span className='text-error'>{errors.address?.message}</span>}
                        </label>

                    </div>


                </div>



                <input className='btn btn-primary w-48' type="submit" value='Save' />
            </form>







        </div>
    );
};

export default MyProfile;