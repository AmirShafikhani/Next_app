import React from 'react';
import { signIn } from 'next-auth/react';

const Login = () => {
    return (
        <div>
           This is login page 

           <button onClick={() => signIn()}>Sign out</button>
        </div>
    );
};

export default Login;