import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlanDetailCard from "../components/PlanDetailCard";
import weeksPhoto from "../assets/images/weeks.png"; // Replace with your image paths

const Elplan = () => {


    const iframStyle = {
        borderRadius: '25px',
        borderWidth: '5px',
        borderColor: 'rgb(0, 174, 250)',
        borderStyle: 'solid',
        width: "600px"
    };

    const paragraphStyle = {
        width: '40vw',
        fontSize: '1.5rem',
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
        fontWeight: 'bold',
    };

    const mangymStyle = {
        height: '60vh',
        marginTop:'20px'
    };

    const proStyle = {
        fontSize: '3rem',
        fontWeight: '800',
        color: '#333',
        textTransform: 'uppercase',
        marginLeft: '60px',
        fontFamily: 'Audiowide, cursive',
        WebkitLineClamp: '2',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        maxWidth: '670px'
    };

    const bottomline = {
        borderBottom: '6px solid #1c0098',
        width: '150px',
    };

    const membershipStyle = {
        fontWeight: '800',
        marginLeft: '68px',
        fontSize: '1.3rem',
        color: '#2ebf91'
    };

    const perksImg = {
        width: '80px',
        height: "80px"
    };

    const perksText = {
        color: '#1c0098',
        fontWeight: '800',
        fontSize: '1.2rem',
        fontFamily: 'Audiowide, cursive',
        WebkitLineClamp: '2',
        textTransform: 'uppercase'
    };

    const perksParagraph = {

        marginBottom: '1rem',

        maxWidth: '600px',
        boxSizing: 'border-box',
        fontWeight: '500'
    };


    const ourplansh1 = {

        fontWeight: '800',
        color: 'rgb(6 182 212)',
        fontSize: '2.2rem',
        // marginTop:'57%',
        fontFamily: 'Audiowide, cursive',
        marginLeft: '4%'
    }
  

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', maxWidth: "100vw" }}>
                <Navbar />
                <PlanDetailCard title='Elite' />
                <div style={{ display: "flex", flexWrap: 'wrap',  flexDirection: 'row-reverse', justifyContent: "space-around", padding: "20px 5vh"  }}>
                    <iframe
                        width="50vw"
                        height="315"
                        src="https://www.youtube.com/embed/9O8mOtdKr44?autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={iframStyle} // Ensure you are using the correct style object
                    ></iframe>
                    <p style={paragraphStyle}>
                        The <span style={{ color: '#1c0098' }}>Elite plan</span>, priced at $50, includes all Premium features along with access to the VIP lounge, specialized training programs, personalized nutrition consultations, complimentary fitness gear, and exclusive events and workshops. It's the most comprehensive plan, offering a premium fitness experience for those seeking the highest level of service.
                    </p>
                </div>
                <div className="big-text" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: "row-reverse", padding: "20px 5vh", justifyContent: "space-around", marginTop: '40px',}}>
                    <img src="/src/assets/images/mangym.jpg" style={mangymStyle} />
                    <div>
                        <div>
                            <h2 style={proStyle}>What will I get when I become PRO?
                            <div className="bottomline" style={bottomline}></div>
                            </h2>
                            
                            <h5 style={membershipStyle}>Membership Perks</h5>
                            <div style={{ display: "flex" }}>
                                <img src="/src/assets/images/nutration.png" style={perksImg} />
                                <div>
                                    <h2 style={perksText}>Advanced Nutrition System</h2>
                                    <p style={perksParagraph}>
                                        Get access to all available plans within the system or use our powerful Plan Editor to create and customize your own plans from over 2500 exercises and activities. PRO-members can also print their plans in an easy to use format.
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <img src="/src/assets/images/gymequipments.png" style={{ ...perksImg, marginTop: "0" }} />
                                <div>
                                    <h2 style={{ ...perksText, marginTop: "0" }}>Complimentary fitness gear</h2>
                                    <p style={perksParagraph}>Using complementary fitness gear is important because it enhances performance, prevents injuries, increases comfort, improves technique, and boosts motivation.</p>
                                </div>

                            </div>

                            <div style={{ display: "flex" }}>
                                <img src="/src/assets/images/healthgym.png" style={{ ...perksImg, marginTop: "0" }} />
                                <div>
                                    <h2 style={{ ...perksText, marginTop: "0" }}>Extensive Plans, PlanCreator</h2>
                                    <p style={perksParagraph}>Get access to all available plans within the system or use our powerful Plan Editor to create and customize your own plans from over 2500 exercises and activities. PRO-members can also print their plans in an easy to use format.</p>

                                </div>
                            </div>
                        </div>
                        <div style= {{marginTop: '40px'}}>
                            <div className="text">
                                <h1 style={ourplansh1}>Our Plans
                                <div className="fill" style={bottomline}></div>

                                </h1>
                            </div>
                            <div style={{ position: "relative" }}>
                                <img src={weeksPhoto}/>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>

        </>
    );
};

export default Elplan;
