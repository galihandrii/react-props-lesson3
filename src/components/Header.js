import { useState } from "react";
import Logo from "./Logo";



const Header = (props) => {
const [location,setlocation]= useState("Jakarta")


    return (
        <div style={{backgroundColor: "yellow"}}>
            <Logo compName={props.compName} loc={location}/>
            <h1>User {props.login ? "login" : "not login"} by {props.name}</h1>
            <button onClick={props.handleLogin}>{props.login ? "Logout":"Login"}</button>
        </div>
    )
}

export default Header;