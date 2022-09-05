import React, { useEffect, useState } from 'react';
import HomeTool from './HomeTool';

const HomeTools = () => {
    const [homeTools, setHomeTools] = useState([]);
    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => {
                setHomeTools(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-5xl font-bold'>Our <span className='text-primary'>Tools</span></h1>
            <p className='m-6 text-gray-400 text-xl'>Manufacturer’s high end manufacturing services are <br></br>a
                perfect complement to today’s high tech industries.</p>

            <div className='grid grid-cols lg:grid-cols-3 gap-5 mx-28'>

                {
                    homeTools.slice(0, 6).map(homeTool => <HomeTool
                        key={homeTool._id}
                        homeTool={homeTool}
                    ></HomeTool>)
                }

            </div>


        </div>
    );
};

export default HomeTools;