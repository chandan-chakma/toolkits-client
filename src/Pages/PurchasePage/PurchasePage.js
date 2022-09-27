import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";

const PurchasePage = () => {
    const { toolId } = useParams();
    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/tool/${toolId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [toolId]);
    const { img, name, price, description, moq } = tool;

    return (
        <div className='flex justify-center items-center my-20'>
            {/* <h1>this for {toolId}</h1>
            <h3>name:{tool.name}</h3> */}
            <div class="card card-compact lg:w-6/12  shadow-xl">
                <figure><img src={img} alt="tool" /></figure>
                <div class="card-body bg-red-500 text-white">
                    <div className='lg:flex items-center justify-center'>
                        <h2 class="card-title text-xl">{name}</h2>
                        <p className='text-3xl'>$ {price}</p>
                    </div>
                    <div className='rounded-md bg-white text-black text-left px-12 py-5 mb-2'>
                        <h2 class="font-bold text-xl">{name}</h2>
                        <p class="font-normal text-base my-2">{description}</p>

                        <p class="font-normal text-base mb-2">moq: {moq}</p>

                        <div className='flex items-center'>
                            <div className='text-yellow-500'>
                                <AiFillStar />
                            </div>
                            <div className='mx-2'>
                                <p>4.5/5</p>
                            </div>
                            <div>
                                <p>153 Ratings</p>
                            </div>
                        </div>

                        <p>Quantity:</p>
                    </div>

                    <div class="card-actions justify-end">
                        <button class="btn btn-warning w-36">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default PurchasePage;
