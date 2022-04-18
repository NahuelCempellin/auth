
import React from "react";
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";
import { useAuth0 } from "@auth0/auth0-react";
import { OutDiv } from "../../styles/out";



export default function Log(){
    const {isAuthenticated}= useAuth0();

    return(
        <div>
            {
               isAuthenticated?
                (<OutDiv>
                    <Profile/>
                    <LogoutButton/>
                </OutDiv>):
                    (
                        <div>
                            <LoginButton/>
                        </div>
                    )
            }


        </div>
    )
}