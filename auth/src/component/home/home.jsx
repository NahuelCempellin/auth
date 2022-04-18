import React, { useImperativeHandle } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


export default function Home(){
    const {isAuthenticated, user}= useAuth0();

    return(
        <div>
            {
                isAuthenticated?
                (
                    <h1>Welcome {user.name}</h1>
                    
                ):
                (
                    <h1>Try to log!</h1>
                )
            }
            
        </div>
    )
}