import React from "react";

export function Header(props) {
    console.log(props);

    const { title, color } = props
    const componentStyle = { 
        backgroundColor: "#2196f3",
        color: color
    }
    return(
        <>
            <header>
                <h1 style={componentStyle} className="head">{title}</h1>
            </header>
        </>
    )
}