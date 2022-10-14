import React from 'react';
import { useQuery } from 'react-query';

const ManageProduct = () => {

    const { data: tools } = useQuery('tool', () => fetch('http://localhost:5000/tool', {
        method: "GET",
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    return (
        <div className='mx-16'>
            <h3>this is manage product</h3>
            <div class="overflow-x-auto">
                <table class="table w-9/12">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool) =>
                                <tr
                                    key={tool._id}
                                >
                                    <td>
                                        <img className='w-16' src={tool.img} alt={tool._id} srcset="" />
                                    </td>
                                    <td className='font-bold'>{tool.name}</td>
                                    <td><button className='btn btn-success'>Edit</button></td>
                                    <td><button className='btn btn-error'>Delete</button></td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;