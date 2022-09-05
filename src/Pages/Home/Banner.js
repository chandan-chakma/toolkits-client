import React from 'react';
import banner1 from '../../asset/image/banner/banner1.png';
import banner2 from '../../asset/image/banner/banner2.png';
import banner3 from '../../asset/image/banner/banner3.png';

const Banner = () => {

    return (
        <div>
            <div className="carousel w-full">

                <div id="item1" className="carousel-item w-full">
                    <img src={banner1} className="w-full" alt='banner1' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={banner2} className="w-full" alt='banner2' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={banner3} className="w-full" alt='banner3' />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1">
                    <div className="avatar">
                        <div className="w-8 rounded">
                            <img src={banner1} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                </a>

                <a href="#item2">
                    <div className="avatar">
                        <div className="w-8 rounded">
                            <img src={banner2} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                </a>

                <a href="#item3">
                    <div className="avatar">
                        <div className="w-8 rounded">
                            <img src={banner3} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                </a>

            </div>
        </div>


    );
};

export default Banner;