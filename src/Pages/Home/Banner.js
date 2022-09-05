import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" class="w-full" />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" class="w-full" />
                </div>


            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1">
                    <div class="avatar w-6">
                        <div class="w-24 rounded">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                </a>
                <a href="#item2">
                    <div class="avatar w-6">
                        <div class="w-24 rounded">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                </a>
                <a href="#item3">
                    <div class="avatar w-6">
                        <div class="w-24 rounded">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                </a>

            </div>


        </div>
    );
};

export default Banner;