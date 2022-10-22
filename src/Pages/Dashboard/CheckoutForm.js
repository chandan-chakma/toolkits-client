import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const { _id, orderPrice, customerName, customerEmail, orderName } = order;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ orderPrice })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret)
                }

            })
    }, [orderPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        setCardError(error?.message || '');

        setSuccess('');
        setProcessing(true);


        // confirm card paymet 

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customerName,
                        email: customerEmail
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
        }
        else {
            setCardError('');

            setSuccess('Your payment is successfully completed');
            console.log(paymentIntent);
            setTransactionId(paymentIntent.id);


            // patch payment 

            const payment = {
                order: _id,
                orderName: orderName,
                customerName: customerName,
                customerEmail: customerEmail,
                transactionId: paymentIntent.id,

            }

            fetch(`http://localhost:5000/order/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`

                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }



    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success mt-4 btn-sm' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-error mt-2'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-success mt-2'>{success}</p>
                    <p className='text-success mt-2'>Your transactionId: {transactionId}</p>
                </div>


            }
        </div >
    );
};

export default CheckoutForm;