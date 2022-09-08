import React from 'react';
import UseTools from './../../Hooks/UseTools';
import Tool from './Tool';
import save from '../../asset/image/banner/save.png';

const Tools = () => {
    const [tools, setTools] = UseTools();
    return (
        <div className='my-12'>
            <div className='flex justify-center items-center mb-12'>
                <img src={save} alt="save" />
            </div>
            <div className='grid grid-cols lg:grid-cols-3 gap-5 lg:mx-28'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    >

                    </Tool>)
                }

            </div>
        </div>
    );
};

export default Tools;