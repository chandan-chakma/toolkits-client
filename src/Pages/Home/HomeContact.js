import React from 'react';
import { ImMobile } from "react-icons/im";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";

const HomeContact = () => {
    return (
        <div className="hero min-h-screen bg-slate-50">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-left lg:mr-12">
                    <h1 className="text-5xl font-bold">Call Us or Fill the Form</h1>
                    <div className="bg-[url('/src/asset/image/person/background.png')]">

                        <div className='flex flex-col lg:flex-row items-center mt-8'>
                            <div className='mr-2 text-xl'>
                                <ImMobile />
                            </div>
                            <div>
                                <h1 className='font-bold text-slate-500 '>646-872-4210</h1>
                                <p className='font-semibold text-slate-400'>Don’t hesitate to contact us</p>
                            </div>
                        </div>

                        <div className='flex flex-col lg:flex-row items-center mt-8'>
                            <div className='mr-2 text-xl'>
                                <AiOutlineClockCircle />
                            </div>
                            <div>
                                <h1 className='font-bold text-slate-500 '>646-872-4210</h1>
                                <p className='font-semibold text-slate-400'>Don’t hesitate to contact us</p>
                            </div>
                        </div>


                        <div className='flex flex-col lg:flex-row items-center mt-8'>
                            <div className='mr-2 text-xl'>
                                <IoLocationOutline />
                            </div>
                            <div>
                                <h1 className='font-bold text-slate-500 '>Factory Address</h1>
                                <p className='font-semibold text-slate-400'>5022 Forest Avenue</p>
                                <p className='font-semibold text-slate-400'>New York </p>
                                <p className='font-semibold text-slate-400'>10013</p>
                            </div>

                        </div>
                    </div>
                </div>



                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <input type="email" placeholder="Email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <input type="number" placeholder="phone" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <textarea type="text" placeholder="How can we help you?" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;