import React from 'react';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';


const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        if (user) {
            fetch(`https://secret-cove-53846.herokuapp.com/order?customerEmail=${user.email}`, {
                method: "GET",
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/');

                    }
                    return res.json()

                })
                .then(data => {
                    setOrders(data);
                    // console.log(data);
                });

        }
    }, [user, navigate, reload])

    const handleCancel = (id) => {

        fetch(`https://secret-cove-53846.herokuapp.com/order/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setReload(true);

            })
    }


    return (
        <div className='mt-12'>
            <h1 className='text-xl mb-4 text-primary font-semibold'>Your have order {orders.length} product</h1>

            <div className="overflow-x-auto">
                <table className="table w-4/6">

                    <thead>

                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) =>
                                <tr
                                    key={index}
                                >
                                    <td>
                                        <img className='w-16' src={order.orderImg} alt={order.orderName} srcSet="" />
                                    </td>
                                    <td className='text-sm font-bold'>{order.orderName}</td>
                                    <td className='font-semibold'>${order.orderPrice}
                                        <h3 className='text-xs'>qty:{order.orderQty}</h3>

                                    </td>
                                    <td> {order.orderPrice && !order.paid ?
                                        <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-primary'>Pay</button></Link> : <span className='text-success font-bold text-xl'>paid</span>}
                                    </td>



                                    <td>
                                        {order.orderPrice && !order.paid ? <button onClick={() => handleCancel(order._id)} className='btn btn-error'>Cancel</button> :
                                            <p className='font-bold'>Transaction ID:<br /> <span className='text-info'>{order.transactionId}</span></p>
                                        }
                                    </td>

                                    <td>
                                        {order.orderPrice && order.paid && <button className='btn btn-success'>Pending....</button>

                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;