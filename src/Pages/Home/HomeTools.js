import React, { useEffect, useState } from 'react';
import HomeTool from './HomeTool';
import UseTools from './../../Hooks/UseTools';

const HomeTools = () => {
    const [tools] = UseTools();

    return (
        <div>

            <h1 className='text-5xl font-bold'>Our <span className='text-primary'>Tools</span></h1>
            <p className='mx-6 mb-12 mt-4 text-gray-400 text-xl'>Manufacturer’s high end manufacturing services are <br></br>a
                perfect complement to today’s high tech industries.</p>

            <div className='grid grid-cols lg:grid-cols-3 gap-5 lg:mx-28'>

                {
                    tools.slice(0, 6).map(tool => <HomeTool
                        key={tool._id}
                        homeTool={tool}
                    ></HomeTool>)
                }

            </div>


        </div>
    );
};

export default HomeTools;