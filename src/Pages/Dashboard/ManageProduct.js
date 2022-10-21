import React from 'react';
import UseTools from './../../Hooks/UseTools';
import { toast } from 'react-toastify';


const ManageProduct = () => {
    const [tools, setTools] = UseTools();

    // const { data: tools } = useQuery('tool', () => fetch('http://localhost:5000/tool', {
    //     method: "GET",
    //     headers: {
    //         'content-type': "application/json",
    //         authorization: `bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()))



    const handleDelete = (id) => {
        const confirmed = window.confirm('Do you want to delete your service');
        if (confirmed) {
            const url = `http://localhost:5000/tool/${id}`;
            fetch(url, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast('Your service is delete')
                    }
                    console.log(data)
                    const remaining = tools.filter(tool => tool._id !== id)
                    setTools(remaining);
                })
        }
    }

    return (
        <div className='mx-16 mt-8'>
            <div className="overflow-x-auto">
                <table className="table w-4/6">

                    <thead>
                        <tr>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            tools.map(tool =>
                                <tr
                                    key={tool._id}

                                >
                                    <td>
                                        <img className='w-16' src={tool.img} alt="" srcSet="" />
                                    </td>

                                    <td>{tool.name}</td>
                                    <td><button className='btn btn-success'>Edit</button></td>
                                    <td><button onClick={() => handleDelete(tool._id)} className='btn btn-error'>Delete</button></td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;