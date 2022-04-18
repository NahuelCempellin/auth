import React from "react";
import Start from "./inicio";
import Proyects from "./Proyects";
import Contact from './contact'
import { Nav2Cont } from "../../../styles/nav2";

export default function NewBar(){
    return(
        <Nav2Cont>
            <Start/>
            <Proyects/>
            <Contact/>
        </Nav2Cont>
    )
}