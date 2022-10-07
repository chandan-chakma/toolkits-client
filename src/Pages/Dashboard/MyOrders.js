import React from 'react';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';


const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customerEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data);
                    console.log(data);
                })

        }
    }, [user])


    return (
        <div className='mt-12'>
            <h1 className='text-xl mb-4 text-primary font-semibold'>Your have order {orders.length} product</h1>

            <div class="overflow-x-auto">
                <table class="table w-2/4">

                    <thead>

                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) =>
                                <tr
                                    key={index}
                                >
                                    <td>
                                        <img className='w-16' src={order.orderImg} alt={order.orderName} srcset="" />
                                    </td>
                                    <td className='text-sm font-bold'>{order.orderName}</td>
                                    <td className='font-semibold'>${order.orderPrice}</td>
                                    <td className='font-medium'>pay</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;