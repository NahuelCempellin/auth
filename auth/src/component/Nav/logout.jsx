import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonLog } from "../../styles/nav";

export default function LogoutButton(){
    const {logout}= useAuth0();
    return(
        <div>
            <ButtonLog onClick={()=>logout({returnTo: window.location.origin})}>Logout</ButtonLog>
        </div>
    )
}