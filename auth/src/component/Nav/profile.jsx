import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Prof } from "../../styles/profile";

export default function Profile(){
    const{user, isAuthenticated, isLoading}=useAuth0();

    if(isLoading){
        return <div>Loading...</div>;
    }
    return(
         isAuthenticated &&(
        <Prof>
            <img src={user.picture} alt={user.name}/>
            
           
         </Prof>
         )
    );
};