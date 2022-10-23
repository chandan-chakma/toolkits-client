import React, { useEffect, useState } from 'react';

const UseTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://secret-cove-53846.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => {
                setTools(data)
            })
    }, [])
    return [tools, setTools];
};

export default UseTools;