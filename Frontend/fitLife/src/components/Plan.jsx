import React from "react";

const Imgtext = ({ name, showWelcome = true, text }) => {
    const spanText = {
        color: 'rgb(0,174,255)'
    };

    return (
        <>
            {showWelcome && (
                <div className="img-text"  style={{width:"100vw",textAlign:"center"}}>  
                    <h1>Welcome to <span style={spanText}>{name} Plan</span> in Fitlife</h1>
                </div>
            )}
        </>
    );
};

export default Imgtext;
