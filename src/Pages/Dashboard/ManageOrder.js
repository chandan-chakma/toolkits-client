import { map } from '@firebase/util';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../SharePages/Loading/Loading';

const ManageOrder = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://secret-cove-53846.herokuapp.com/orders', {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setOrders(data);
            })
    }, [])

    if (loading) {
        setLoading(true)
    }



    return (
        <div className='mt-8'>
            <div className="overflow-x-auto">
                <table className="table w-10/12">

                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr
                                key={order._id}

                            >
                                <td>
                                    <img className='w-11' src={order.orderImg} alt="" srcSet="" />
                                </td>

                                <td className='text-xs font-bold'>{order.orderName}</td>
                                <td className='text-xs font-bold'>{order.customerEmail}</td>
                                <td className='text-xs font-bold'>${order.orderPrice}
                                    <h3>qty:{order.orderQty}</h3></td>

                                <td>
                                    {
                                        order.paid ?
                                            <button className='btn btn-warning'>Shipped</button> :

                                            <button className='btn btn-success text-'>Unpaid</button>
                                    }
                                </td>
                                <td>
                                    {
                                        !order.paid && <button className='btn btn-error'>Cancel</button>


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

export default ManageOrder;