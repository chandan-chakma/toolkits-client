import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../SharePages/Loading/Loading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: "GET",
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const stripePromise = loadStripe('pk_test_51Lc1FZHWZC0QGlaAZ117CeF6SEjuqD173DSIwlFFAeZFpqAigzb8R7z6hk4jSvWyt8qpRFFPuRMe68wadjryaHZD005aSFhsvv');

    return (
        <div className='m-12'>
            <h2>payment esaily{id}</h2>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl mb-12">
                <div class="card-body">
                    <h1 className='font-bold'>Pay for: <span className='text-orange-700 '>{order.orderName}</span></h1>
                    <p className='font-bold'>Order Quantity: <span className='text-emerald-500'>{order.orderQty}</span></p>
                    <p className='font-bold'>Total Price: <span className='text-indigo-500'>${order.orderPrice}</span></p>


                </div>
            </div>

            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>



                </div>
            </div>
        </div >
    );
};

export default Payment;