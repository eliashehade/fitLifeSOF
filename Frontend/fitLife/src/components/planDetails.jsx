import React from "react";

import PlanDetailCard from "./PlanDetailCard";
// import fitlifeImg from '../assets/images/fitlife.jpg';
import servicesImg from '../assets/images/services.jpg'; 
import waterBottleImg from '../assets/images/iwaterbottle.png';
import gymimg from '../assets/images/gym-icon.png';
import lockerrom from '../assets/images/lockerroom.png';

function PlanDetail({title,desc}) {
  const vidStyle = {
    float: 'right',
    marginRight: '25px',
    marginTop: '55px',
  };
  
  const iframStyle = {
    borderRadius: '25px',
    borderWidth: '5px',
    borderColor: 'rgb(0, 174, 250)',
    borderStyle: 'solid',
    float: 'right',
  };
  
  const paragraphStyle = {
    marginTop: '75px',
    marginLeft: '15px',
    fontSize: '1.6rem',
    fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
    fontWeight: 'bold',
  };
  
  const iconDiv = {
    position: 'relative',
    // display:"flex",
    minHeight: '68vh',
    width: '100%',
    marginTop: '390px',
  };

  const imgStylee = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    filter: 'brightness(40%)',
    paddingTop: '50px',
    marginTop:'-30px',
  };

  const upperLiftStyle = {
    // position: 'relative', 
    // // width: '100%',
    // height: '60vh',
    // // overflow: 'hidden',
    // width:'100px',
    // position:'absolute',
    // marginTop:'-300px',
    // marginLeft:'650px',
  };

  const imgBottle = {
    width: '100px',
    position: 'absolute',
    marginTop: '50px',
    marginLeft: '400px',
  };
  const waterText = {
    color:'white',
    position:'absolute',
    paddingTop:'50px',
    fontFamily: 'Arial, Helvetica, sansserif',
    fontWeight:'bold',
    fontSize:'1.2rem',
    paddingLeft:'395px',
    paddingTop:'150px',
  };
  
  const gymIcon = {
    width:'100px',
    position:'absolute',
    marginTop:'50px',
    marginLeft:'650px',
  };
  
  const gymText = {
    color:'white',
    position:'absolute',
    marginTop:'50px',
    fontFamily: 'Arial, Helvetica, sansserif',
    fontSize:'1.2rem',
    fontWeight:'bold',
    marginLeft:'630px',
    paddingTop:'100px',
  };
  const groupImg = {
    width:'80px',
    position:'absolute',
    marginTop:'50px',
    marginLeft:'890px',
  };
  
  const groupText = {
    color:'white',
    position:'absolute',
    marginTop:'50px',
    fontFamily: 'Arial, Helvetica, sansserif',
    fontSize:'1.2rem',
    fontWeight:'bold',
    marginLeft:'820px',
    paddingTop:'100px',

    marginBottom:'0',
  };


  const equipmentStyle = {
    width:'100px',
    position:'absolute',
    marginTop:'250px',
    marginLeft:'405px',
  };
  
  const equipmentText = {
    color:'white',
    position:'absolute',
    marginTop:'250px',
    fontFamily: 'Arial, Helvetica, sansserif',
    fontSize:'1.2rem',
    fontWeight:'bold',
    paddingTop:"100px",
    marginLeft:'350px',

  };
  
  const contractImg = {
    width:'100px',
    position:'absolute',
    marginTop:'250px',
    marginLeft:'665px',
  };
  
  const contractText = {
    color:'white',
    position:'absolute',
    marginTop:'250px',
    fontFamily: 'Arial, Helvetica, sansserif',
    fontSize:'1.2rem',
    fontWeight:'bold',
    paddingTop:"100px",
    marginLeft:'650px',
  };
  const lockerRoom = {
    width:'100px',
    position:'absolute',
    marginTop:'250px',
    marginLeft:'880px',
  };
  
  const lockerRoomText = {
    color:'white',
    position:'absolute',
    marginTop:'250px',
    fontFamily: 'Arial, Helvetica, sansserif',
    fontSize:'1.2rem',
    fontWeight:'bold',
    marginLeft:'865px',
    paddingTop:"100px"
  };
  
 
  
  

  const creativeWrapperStyle = {
    width: '100%',
    height: 'auto',
    position: 'relative',
    overflow: 'hidden',
    marginTop: '-30px',
  };

  const creativeStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    clipPath: 'polygon(100% 50%, 100% 0, 0 0, 100% 95%)',
  };
  const creativeText = {
    fontFamily:'Fantasy',
    fontSize:'7rem',
    marginLeft:'70px',
    marginTop:'-650px'
  }
  const creativeText2 = {
    color:'rgb(104, 14, 230)',
    fontFamily:'Fantasy',
    fontSize:'7rem',
    marginLeft:'70px',
    top:'70%'
  }
  const creativeText3 = {
    color:'black',
    fontFamily:'Fantasy',
    fontSize:'7rem',
    marginLeft:'250px',
    top:'60%'
  }
  const whyText = {
    fontSize: '4rem',
    lineHeight: '5rem',
    paddingLeft: '2.75rem',
    paddingRight: '2.75rem',
    marginTop:'2rem',
    textTransform:'uppercase',
    fontWeight:'800',
    fontFamily: 'Barlow Condensed, sans-serif',
    textAlign:'center',
    opactiy:'1'
  }
  const whySpan = {
    color:'rgb(104, 14, 230)'
  }
  const imgCreative = {
    width:'105px',
    marginLeft:'250px',
    marginTop:'50px',
  }
  const paragraphCreative = {
    lineHeight:'2.5rem',
    fontSize:'1.5rem',
    letterSpacing: '-.4px',
    fontWeight:'600',
    marginLeft:'150px',
    marginTop:'-30px'
  }
  const paracreative = {
    fontSize:'0.95rem',
    // lineHeight:'1.75rem',
    // marginBottom: '.55rem',
    marginLeft:'150px'
    
  }
  const tonCreative = {
    width:'90px',
    marginLeft:'655px',
    marginTop:'-165px'
  }
  const tonBig = {
    lineHeight:'2.5rem',
    fontSize:'1.5rem',
    letterSpacing: '-.4px',
    fontWeight:'600',
    marginLeft:'580px',
    marginTop:'-10px'
  }
  const textTon = {
    fontSize:'0.95rem',
    // lineHeight:'1.75rem',
    // marginBottom: '.55rem',
    marginLeft:'520px'
  }
  const textTon2 = {
    fontSize:'0.95rem',
    // lineHeight:'1.75rem',
    // marginBottom: '.55rem',
    marginLeft:'520px'
  }

  const lockerRooms = {
    width:'90px',
    marginLeft:'1060px',
    marginTop:'-165px'
  }
  const lockerRoomsText = {
    lineHeight:'2.5rem',
    fontSize:'1.5rem',
    letterSpacing: '-.4px',
    fontWeight:'600',
    marginLeft:'1010px',
    // marginTop:'-80px',
  }
  const lockerRoomspara = {
    fontSize:'0.95rem',
    // lineHeight:'1.75rem',
    // marginBottom: '.55rem',
    marginLeft:'950px',
    marginBottom:'50px',
  }
  return (
    <div>
            <PlanDetailCard title={title} />

<div className="vid" style={vidStyle}>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/tkqdqE2I3fs"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={iframStyle}
  ></iframe>

  <p style={paragraphStyle}>
    {desc}
  </p>
</div>

<div className="img-icons" style={iconDiv}>
  <img src={servicesImg} alt="Services" style={imgStylee} />
  <div className="icons">
    <div className="icon" style={upperLiftStyle}>
      <img src={waterBottleImg} style={imgBottle} />
      <h4 style={waterText}>Free Water</h4>
    </div>
    <div className="icon-gym">
      <img src={gymimg} style={gymIcon} />
      <h4 style={gymText}>Access To Gym</h4>
    </div>
    <div className="locker-room">
      <img src={lockerrom} style={lockerRoom} />
      <h4 style={lockerRoomText}>Locker rooms</h4>
    </div>
    <div className="equipment">
      <img src="/src/assets/images/eqiupment.png" style={equipmentStyle} />
      <h4 style={equipmentText}>Standard equipment</h4>
    </div>
    <div className="contract">
      <img src="/src/assets/images/contract.png" style={contractImg} />
      <h4 style={contractText}>No Contract</h4>
    </div>
    <div className="group">
      <img src="/src/assets/images/-team-5138425.png" style={groupImg} />
      <h4 style={groupText}>Group Classes (limited)</h4>
    </div>
  </div>
</div>

<div className="creative" style={creativeWrapperStyle}>
  <img src="/src/assets/images/ingym.jpg" style={creativeStyle} alt="Creative" />
  <h1 style={creativeText}>Why?</h1>
  <h1 style={creativeText2}>Choose?</h1>
  <h1 style={creativeText3}>Us?</h1>
</div>
<div className="why">
  <h3 style={whyText}>a place where <span style={whySpan}>everyone</span> feels welcome</h3>
  <img src="/src/assets/images/money.png" style={imgCreative}/>
  <p style={paragraphCreative}>Best value on the World</p>
  <p style={paracreative}>We believe in providing a high-quality</p>
  <p style={paracreative}>  experience at an affordable cost.</p>
  <img src="/src/assets/images/tonsingym.png" style={tonCreative}/>
  <p style={tonBig}>Tons of equipment</p>
  <p style={textTon}>Tons of cardio and strength equipment, all in</p>
  <p style={textTon2}>a clean and spacious environment.</p>
  <img src="/src/assets/images/lockerrooms.png" style={lockerRooms}/>
  <p style={lockerRoomsText}>Locker Rooms</p>
  <p style={lockerRoomspara}>Biggest Locker Room With High Quality</p>
</div>
    </div>
  );
}

export default PlanDetail;
