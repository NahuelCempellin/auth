import React from "react";
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar } from "../../styles/nav";
import NewBar from "./NewBar/newbar";
import Log from "./log";

export default function Nav(){
    return(
        <NavBar>
            <div>
            <Log/>
            </div>
            <div>
             <NewBar/>
            </div>

        </NavBar>
    )
}