import React from "react";
import logo from "../assets/logo.svg"
import '../styles/Header.css'

export function Header() {
    return(
            <header>
                <div className="left">
                    <img src={logo} alt="" />
                    <div className="left-names">
                        <a href="">Featuring</a>
                        <a href="">Pricing</a>
                        <a href="">Testimonial</a>
                        <a href="">Help</a>
                    </div>
                </div>
                <div className="right">
                    <a className="enter" href="">Sign in</a>
                    <a className="enter --sign" href="">Sign up</a>
                </div>
            </header>
    )
}