import React from 'react';
import { AiFillMoneyCollect } from "react-icons/ai";
import { FaSellsy, FaTools } from 'react-icons/fa';
import 'react-count-animation/dist/count.min.css';
import AnimationCount from 'react-count-animation';

const BusinessSummary = () => {
    const totalTools = {
        start: 10,
        count: 3500,
        duration: 3000,

        useGroup: true,
        animation: 'slide',
    };
    const sellTools = {
        start: 10,
        count: 35000,
        duration: 3000,

        useGroup: true,
        animation: 'up',
    };
    const review = {
        start: 10,
        count: 86387,
        duration: 3000,
        useGroup: true,
        animation: 'up',
    };
    const revenue = {
        start: 10,
        count: 95341,
        duration: 3000,
        useGroup: true,
        animation: 'roll',
    };
    return (
        <div className='my-20'>
            <div className="stats stats-vertical lg:stats-horizontal shadow gap-5 ">


                <div className="stat ">
                    <div className="stat-figure text-secondary text-3xl">
                        < FaTools />
                    </div>
                    <div className="stat-title">Total Tools</div>
                    <div className="stat-value text-sky-800"><AnimationCount {...totalTools} /></div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary text-3xl">
                        < FaSellsy />
                    </div>
                    <div className="stat-title">Sell Tools</div>
                    <div className="stat-value text-sky-800"><AnimationCount {...sellTools} /></div>
                    <div className="stat-desc">From January 1st to September 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Review</div>
                    <div className="stat-value text-sky-800"><AnimationCount {...review} /></div>
                    <div className="stat-desc">50% more than last year</div>
                </div>



                <div className="stat">
                    <div className="stat-figure text-secondary text-3xl">
                        <AiFillMoneyCollect />
                    </div>
                    <div className="stat-title">Annual Revenue</div>
                    <div className="stat-value text-sky-800"><AnimationCount {...revenue} /></div>
                    <div className="stat-desc">42% more than last month</div>
                </div>



            </div>

        </div>
    );
};

export default BusinessSummary;