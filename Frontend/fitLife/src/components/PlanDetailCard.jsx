import React from "react";
import Imgtext from "../components/Plan";
import fitlifeImg from '../assets/images/fitlife.jpg';
import { BiBorderBottom } from "react-icons/bi";

const PlanDetailCard = ({ title }) => {
    const containerStyle = {
        position: 'relative',
        minHeight: '70vh',
        overflow: 'hidden',
        display: "flex"

    };

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        filter: 'brightness(50%)',
        top: 0,
        left: 0,
        zIndex: -1,
    };

    const textStyle = {
        color: 'white',
        fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',
        position: 'relative',
        zIndex: 1,
        alignSelf: "center",
        fontSize: '3rem',
        justifySelf: "center"
    };

    const whatDoStyle = {
        color: 'black',
        fontSize: '2.3rem',
        marginTop: '40px',
        fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',

    };
    const bottomRow = {
        borderBottom: '5px solid rgb(0,174,255)',
        width: '150px',
        marginLeft:'70px'
    }
    console.log(title);
    const Card = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    return (<>
        <div style={Card}>
            <div style={containerStyle}>
                <img src={fitlifeImg} style={imgStyle} alt="Fit Life" />
                <div className="text" style={textStyle}>
                    <Imgtext name={title} />
                </div>
            </div>
            <div className="text" style={{ textAlign: "center" }}>
                <h3 style={whatDoStyle}>What We Will Do?</h3>
                <div className="bottom-row" style={bottomRow}>
                </div>
            </div>
        </div>
    </>
    );
};

export default PlanDetailCard;
