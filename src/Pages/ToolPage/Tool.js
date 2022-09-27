import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, img, name, price, quantity } = tool;
    const navigate = useNavigate();

    const handlePurchase = (id) => {
        navigate(`/tool/${id}`)
    }

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="tools" className="rounded-xl ease-in-out duration-300 hover:scale-150 duration-500" />
            </figure>
            <div className="card-body items-center text-left">
                <h2 className="card-title">{name}</h2>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <p className='text-xl font-semibold'>price : ${price}</p>
                <p className='text-xl font-semibold mb-2'>Quantity : {quantity}</p>
                <div className="card-actions">
                    <button onClick={() => handlePurchase(_id)} className="btn btn-primary">Buy Now</button>

                </div>
            </div>
        </div>


    );
};

export default Tool;