import { map } from '@firebase/util';
import React, { useState } from 'react';
import { useEffect } from 'react';

const ManageOrder = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders', {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
            })
    }, [])


    return (
        <div>
            <h4>this is manage order:{orders.length}</h4>
            <div class="overflow-x-auto">
                <table class="table w-10/12">

                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(order => <tr
                                key={order._id}

                            >
                                <td>
                                    <img className='w-11' src={order.orderImg} alt="" srcset="" />
                                </td>

                                <td className='text-xs font-bold'>{order.orderName}</td>
                                <td className='text-xs font-bold'>{order.customerEmail}</td>
                                <td className='text-xs font-bold'>${order.orderPrice}
                                    <h3>qty:{order.orderQty}</h3></td>
                                <td><button className='btn btn-success'></button></td>
                                <td><button className='btn btn-warning'>Delivered</button></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageOrder;