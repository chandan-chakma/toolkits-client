import React from 'react';
import icon1 from '../../asset/image/icon/delivery.png';
import icon2 from '../../asset/image/icon/support.png';
import icon3 from '../../asset/image/icon/free.png';
import icon4 from '../../asset/image/icon/discount.png';

const Info = () => {
    return (
        <div className='grid grid-cols lg:grid-cols-4 gap-5 lg:mx-28 my-14'>

            <div className="card  card-side bg-base-100 shadow-xl px-5">
                <figure><img src={icon1} alt="Movie" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title text-base font-bold">FREE DELIVERY</h2>
                    <p className='text-sm font-medium'>Free shipping on all order.</p>

                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl px-5">
                <figure><img src={icon2} alt="Movie" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title text-base font-bold">ONLINE SUPPORT 24/7</h2>
                    <p className='text-sm font-medium'>Support online 24 hours.</p>

                </div>
            </div>


            <div className="card card-side bg-base-100 shadow-xl px-5">
                <figure><img src={icon3} alt="Movie" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title text-base font-bold">MONEY RETURN</h2>
                    <p className='text-sm font-medium'>Back guarantee under 7 days.</p>

                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl px-5">
                <figure><img src={icon4} alt="Movie" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title text-base font-bold">MEMBER DISCOUNT</h2>
                    <p className='text-sm font-medium'>Onevery order over $30.00.</p>

                </div>
            </div>



        </div>
    );
};

export default Info;