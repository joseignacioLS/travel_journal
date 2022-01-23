import React from "react"
import ico from "../images/world-ico.png"

export default function Navbar()
{
    return (
        <nav>
            <img src={ico} className="nav--logo"/>
            <h1 className="nav--title">Jose's Travel Journal</h1>
        </nav>
    )
}