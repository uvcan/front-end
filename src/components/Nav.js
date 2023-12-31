import React from "react";
import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <div>
            <ul className="nav-ul">
                <li><Link to="/">Product</Link> </li>
                <li><Link to="/add">Add</Link> </li>
                <li><Link to="/update">Update product</Link> </li>
                <li><Link to="/logout">logout</Link> </li>
                <li><Link to="/Profile">Profile</Link> </li>
            </ul>
        </div>
    )
}


export default Nav;