import React from "react";
import '../styles/Body.css'
import bgImage from '../assets/img-person.png'

export function Body() {
    return(
           <main>
                <div className="left-info">
                    <h1>Want anything to be easy with <span>LaslesVPN</span></h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.
                    </p>
                    <button>
                        Get started
                    </button> 
                </div>
                <div className="right-info">
                    <img src={bgImage} alt="" />
                </div>
           </main>
    )
}