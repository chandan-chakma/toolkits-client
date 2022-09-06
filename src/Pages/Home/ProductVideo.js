import React from 'react';

const ProductVideo = () => {
    return (
        <div className='flex justify-center items-center m-40'>
            <div className='flex-1'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/o4ijHIRaGXc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
            <div className='flex-1 text-left'>
                <h1 className='font-bold text-3xl '>Our Capabilities</h1>
                <p className='font-light text-xl my-5'>We Are Restocking as Quickly as Possible. Come Back 7/30 to Order, more of These Flavors Inspired by the Places You Call Home! </p>
                <button class="btn btn-primary">Learn More</button>

            </div>
        </div>
    );
};

export default ProductVideo;