import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const PurchasePage = () => {
    const [user] = useAuthState(auth);

    const { toolId } = useParams();
    const [tool, setTool] = useState({});
    const [qty, setQty] = useState(0);
    const navigate = useNavigate();



    useEffect(() => {
        const url = `http://localhost:5000/tool/${toolId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTool(data)
                setQty(data.moq)
            })
    }, [toolId]);
    const { _id, img, name, price, description, moq, quantity } = tool;



    // const handleqtyMinus = (miniQty) => {
    //     if (miniQty <= moq) {


    //     }

    // }

    const handleBuy = (event) => {
        const orderPrice = parseFloat(qty * price);
        console.log(orderPrice)

        const order = {
            orderToolId: _id,
            orderImg: img,
            orderName: name,
            orderQty: qty,
            orderPrice,
            customerEmail: user.email,
            customerName: user.displayName


        }

        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log('order', data);
                if (data.success) {
                    toast(`You have order ${order.orderName}`)
                    navigate('/dashboard/myorders')
                }
                else {
                    toast.error(`Already you have order ${order.orderName}`)
                }


            })
        console.log(order)
    }

    // const handleIncrease = (id) => {
    //     const minimumqty = moq;
    //     tool.find((buy) => buy._id === id);
    //     setQty(qty + 1)


    // }

    // const handleQty=(event)=>{

    // }


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

                        <div className='flex items-center my-2'>
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

                        <p className='mt-4'>Quantity: <button disabled={qty <= moq} onClick={() => setQty(qty - 1)} className='ml-4'><AiOutlineMinus /></button>
                            <input name='qty' type="number" value={qty} placeholder="Type here" class="input w-24 h-8 max-w-xs mx-3 input-bordered" />
                            <button disabled={quantity <= qty} onClick={() => setQty(qty + 1)}><AiOutlinePlus /></button></p>



                    </div>

                    <div class="card-actions justify-end">
                        <button onClick={() => handleBuy(_id)} class="btn btn-warning w-36">Buy</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default PurchasePage;
