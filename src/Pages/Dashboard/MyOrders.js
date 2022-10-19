import React from 'react';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customerEmail=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/');

                    }
                    return res.json()

                })
                .then(data => {
                    setOrders(data);
                    console.log(data);
                });

        }
    }, [user, navigate, reload])

    const handleCancel = (id) => {

        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReload(true);

            })
    }


    return (
        <div className='mt-12'>
            <h1 className='text-xl mb-4 text-primary font-semibold'>Your have order {orders.length} product</h1>

            <div class="overflow-x-auto">
                <table class="table w-4/6">

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
                                    <td className='font-semibold'>${order.orderPrice}
                                        <h3 className='text-xs'>qty:{order.orderQty}</h3>

                                    </td>
                                    <td> <button className='btn btn-primary'>Pay</button></td>
                                    <td> <button onClick={() => handleCancel(order._id)} className='btn btn-error'>Cancel</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;