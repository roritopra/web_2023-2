import React from "react"
import '../styles/Footer.css'
import logo from '../assets/logo.svg'
import facebook from '../assets/facebook.svg'
import youtube from '../assets/youtube.svg'

export function Footer() {
    return(
           <footer>
                <div className="left-footer">
                    <img src={logo} alt="" />
                </div>
                <div className="center-footer">
                    <a href="">Featuring</a>
                    <a href="">Pricing</a>
                    <a href="">Testimonial</a>
                    <a href="">Help</a>
                </div>
                <div className="right-footer">
                    <img src={facebook} alt="" />
                    <img src={youtube} alt="" />
                </div>
           </footer>
    )
}