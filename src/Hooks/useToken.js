

import { useState } from 'react';
import { useEffect } from 'react';
const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        // console.log('useToken', user)
        const email = user?.user?.email;

        const currentUser = { email: email }

        if (email) {
            fetch(`https://secret-cove-53846.herokuapp.com/user/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('data token', data)
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);


                })

        }

    }, [user])

    return [token];
}
export default useToken;