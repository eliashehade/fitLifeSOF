import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import servicesImg from '../assets/images/services.jpg'; 
import equipmentImg from "/src/assets/images/Gym_Equipment.png"; 

import PlanDetailCard from "../components/PlanDetailCard";
const Vipplan = () => {
    const vidStyle = {
        float: 'right',
        marginRight: '25px',
        marginTop: '55px',
      };
      const iframStyle ={
        borderRadius: '25px',
        borderWidth: '5px',
        borderColor: 'rgb(0, 174, 250)',
        borderStyle: 'solid',
        float: 'right',
      }
      const paragraphStyle = {
        marginTop: '25px',
        marginLeft: '15px',
        fontSize: '1.6rem',
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
        fontWeight: 'bold',
      };
      const spanpremium = {
        color:"rgb(196, 139, 4)"
      }
      const imgIcon = {
        position: 'relative',
        minHeight: '68vh',
        width: '100%',
        marginTop: '390px',
      };
      const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        filter: 'brightness(30%)',
        paddingTop: '50px',
        marginTop:'-30px'
      }
      const upperLiftStyle = {
        position: 'relative', 
        width: '100%',
        height: '60vh',
        overflow: 'hidden',
      }
      const equipmentStylee = {
        width: '100px',
        position: 'absolute',
        marginTop: '50px',
        marginLeft: '400px',
      }
      const equipmentText = {
        color:'white',
        position:'absolute',
        paddingTop:'50px',
        fontFamily: 'Arial, Helvetica, sansserif',
        fontWeight:'bold',
        fontSize:'1.2rem',
        paddingLeft:'350px',
        paddingTop:'150px',
      }
      const personalTrainer = {
        width:'120px',
        position:'absolute',
        marginLeft:'650px',
        marginTop:'40px'
      }
      const personalTrainerText = {
        color:'white',
        position:'absolute',
        marginTop:'150px',
        fontFamily: 'Arial, Helvetica, sansserif',
        fontSize:'1.2rem',
        fontWeight:'bold',
        marginLeft:'635px',
      }
      const saunaRoom = {
        width:'90px',
        position:'absolute',
        marginTop:'60px',
        marginLeft:'950px',
      }
      const saunaRoomText = {
        color:'white',
        position:'absolute',
        marginTop:'152px',
        fontFamily: 'Arial, Helvetica, sansserif',
        fontSize:'1.2rem',
        fontWeight:'bold',
        marginLeft:'865px',
      }
      const groupClasses = {
        width:'80px',
        position:'absolute',
        marginTop:'210px',
        marginLeft:'405px',
      }
      const groupClassesText = {
        color:'white',
        position:'absolute',
        marginTop:'295px',
        fontFamily: 'Arial, Helvetica, sansserif',
        fontSize:'1.2rem',
        fontWeight:'bold',
        marginLeft:'330px',
      }
      const prioritySupport = {
        width:'80px',
        position:'absolute',
        marginTop:'210px',
        marginLeft:'685px',
      }
      const prioritySupportText = {
        color:'white',
        position:'absolute',
        marginTop:'295px',
        fontFamily: 'Arial, Helvetica, sansserif',
        fontSize:'1.2rem',
        fontWeight:'bold',
        marginLeft:'650px',
      }
      const contractStyle = {
        width:'80px',
        position:'absolute',
        marginTop:'215px',
        marginLeft:'950px',
      }
      const contractText = {
        color:'white',
        position:'absolute',
        marginTop:'295px',
        fontFamily: 'Arial, Helvetica, sansserif',
        fontSize:'1.2rem',
        fontWeight:'bold',
        marginLeft:'935px',
        marginBottom:'0',
      }
  return(
    <>
    <div>
    <Navbar />
    <PlanDetailCard title={'Premium'} />
    <div className="vid" style={vidStyle}>
        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/04kAfDdqEfg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={iframStyle}
    ></iframe>
        <p style={paragraphStyle}>The <span style={spanpremium}>Premium plan</span>, priced at $25, offers an upgraded gym experience compared to the Basic plan. It includes all the features of the Basic plan, such as gym access, free water, and locker room use. Additionally, Premium members benefit from premium equipment, access to a personal trainer, unlimited group classes, sauna and steam room privileges, and priority customer support.</p>
    </div>
    <div className="img-icons" style={imgIcon}>
        <img src={servicesImg} style={imgStyle}/>
        <div className="icons">
            <div className="equipment-icon"style={upperLiftStyle}>
                <img src={equipmentImg} style={equipmentStylee} />
                <h4 style={equipmentText}>Premium Equipment</h4>
            <div className="personal-trainer">
                <img style={personalTrainer} src="/src/assets/images/personaltrainer.png" />
                <h4 style={personalTrainerText}>Personal Trainer</h4>
            </div>
            <div className="sauna-rooms">
                <img style={saunaRoom} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAPR0lEQVR4nO1bCXAUVRpmdcX13FURUXGtXcn0EBBQXFREwSVSHJmeJDPhVCgOEUFYazUouty7CCur3GiwFhG5wpGTmQmJhBDuBEIglwSCBBLITe6ZTqb//d973dPTmUkySRjYbO2rejU1me6//+97//uv1+nk5zekM857cHZqyyD3Sfd3dpodR16HUtYb8jqUsndQXodS9v/g/1vBA3T6FZi0gWDRRkEsd1a0cFm2GC6pJlK7NOMbrvv/NngzNwNnFVg4IFM0cyDsV03RFs0drN3LdbkT+nlVOMT67JSBw08vgpg6FoSs2WymvgPC4aFIgJaSAmZNNZh6+N5O/bwqHM19BQUeqwXIngFizTYQqnYos2g9fm4HsehrgCNDQCKqHGL7PHA79POqcIjTPoZgGiio3BAQ63apwV+aR81fPD4cwLoLoHorwOFBjAQzt7wt+kUYBj/UEMQPgeDgu+8oeDLApPmEgjnqpwZfthmEgi/R/CcysyfXpI1DEsIA8hZIVqC56iIvmA+EYP3U5vSzG/m/4zUgX3fHwFOFLdxe6vCyZ4GQ+znudT8QYvs5HJ8DvDwz3wWo2CQTYHNDQCEBZxvNP9OUfvh7DiVgtN5wR8EzAjT7qLc/PETt8U29QEz0Azj9HkBBNMCVbegjejLgiQNlQqwu8oz6ONHIQ42Bn+sWPM8/JK2+CG+/5ZEPaRV4GKN/BpWYi/vrt57Is8dy4xXgWhDSFoFwfgmIQgWoxrV96CCXAxwc6GwR8S7yjLoVAhJQa9StbmpxUL98yQJGeoLXY/CS8FDGMD/DE+HkfluMJpUSkLYQhDMhzOyvmwBy1gCcehugvgpX3xcgri9A3Q3ZAYpg6f5oY3kIPpsQUGHUjWnKMlHHr5iOAe97op/n4BcuvAuFlzF2+Tc8EU7kVEdwIZSA5FkgVmQj8NUADTXo7YcxsJWZaAF7cStEITH7JQI0J92SadQVEAKKA/0HNbUtYfyoR1DHd9BK7/NEP4/3POj1v5NWvwH8/e/3RDiZN3ZpX6IO70B/ALFBMfuk4RIBWcrf0v8mO8Cl7uTVGfnvCQH4ubytcb6xfq1yeGDkMykJRj7YE+FkTpo0oLNo8immwMpOKWCvYtw//xmSUs++E3ISpBzApB3sTl6dUbeFEIChbtmtAC8T4LG3R/DzJS87xhPhDu9s0ayiwM7NZWBz1gKcnIBRYDpA8hS2JYoOSubvkw8LO93lTp6AW4BEAdzfA24FeOoDWhPqqB8I8te6E15u4IeiguWVBn6yS/Qw9+yF4EQa6qovMvCyt4/tBVB7FeBYoLz/5zelLEaBDUh+JNHjVoCn+nkKviXhVUG6acQ8rUZdklsfYuG2UoBJIwCqcgBuWFj4q7oEkLFA9v6lVeE+D7dmW1LZgYFd2wReuuCW1N/pvO5ptIAGJEGs1OkeclHS4vsoboXLjlUnVpAyDavDV2RrsDeYtcNaDT6YD6GJj0GnbzV4+aL2giczP8i/L7EA0aizwfDh97pV1sQZGQGNUmCSLps0Ua0FLxGQJsX9ca0G7+nA+D8N5xE0tSebEl5j1M1iDkof6VYG6QaZNVHMGc4DKE4EKIzHaLCbNUditJXHNvR6vFXgnUMzpsFeAc8I4PdID5rTlPCGIH+9FCFyVfcm+D6IVeFM3N9ZjhUnmaA0RHsD1ga9WboczVXVRmpXXdvGcZ4oC4MH/xp1qqLPNfAvewU8fVBwwHTyEDTvhCZDHZo9XQmizDj/Lgh6EIIOBYu2wgE8HpOhlKkI287AiyIIggBCziYQ4l53rhLtaC2xeM+Elhoj+LwtcnruFfDSQ6YS87YZ+MNNCYeFb0yBtQMAdjxfj4rXqPb40QBq6tBQp6y8DN55Fh0HMXUOqw0cYZI0VDSXKCGx2nGQ0v8elW5Bo3wQ/IrasaO6eAU8GaJBt4c4uGqjLsRl5Q9wT6Fy0Y2dmmPGvaAq/KwNTYDHSf5Ox8X17mWxNPkyWtdQZ/28tvKycKuUgtYadP9SgY/2eRrBX6GKHeiDic5ggCMGgNTZmNfPZ/GdFDjSWIGZcNd1Ipy41gx4MmwlWB6vYDLSQrBqfAfljiTlsiglSwJ+vkn0awjiX8ciKSZPP8LXK+CJsJtGnZEQgA86pTJ7M2d2mHhtPrQ0JppEeHS1AD+cawZ8c8NuY+k0I+HC+TUP32018vuIblUGfqZXwNMQZ9AtoVmeQRfhAG/S9GEm3g/r+OsuulairsFY4b6NBlBbz8x+d6YAfjsFyClpA3h5ED9ycCANnTe39hkuGHQC0S3fqOvjFfBkIvBIVoXpHckG7sUxrI+32HWhEFNABMAja9kcHy2Crbk938ohpn1Mo0VNWK/P0TEX40z2GngySwz8QCxBF8Gkwb9xEIAVGxRERTp7dnnsymbAnw4F6LaRmX30BVfwBL61wRXg8pMAfb7HwFHpBjxxoOnLKAG1UdyKQyNHPBY2zO9Br4FvjlnU59/uVmhuIiMgOEEEnVmgBCw67Lryk80Az36LCWGN+n7/fex+y2U34ImMc4uZBURxixvrRxYJw+ICTIxe8gRv28HH/rErnJqYAeWpLgTsvYAA1rCVl6cpx9Xsh4YxoNml6vu/xGjRb4vaAlShM3kWJaA6nJveWD/MWsdKTZtwTxa7TeDpg8yYlBAfQDM7aditAFnLwF6UCEuOCPDsBgH+sFGAlSfc7/mL5ZjnNFpll2EtAjF9AQhl6QoBJ6ZRAuwmbryLXghcImBhS+D9WtMTdHmQqccLjuQkP5IpW36WFTaHhlFFbbfC4V34mqXIZN8TWdXX2bkC6S6bfMa66BXMn5Ta4gEtgZcJaFMGBWG+nRF8PSMggimLDlGw9GUKX94GgrVaDb4ebTp3E8CZmZjslLI+4LlP0Gq+gPSCUnhtO8DS4zJyO4glx5DM4UxeXjQjoLYMREtPuX02xw0BK6XaYHNL4GUC2pQ+QpSmC+3fk7y9vkrZo8cnKydAca+AmPIey+hI84P0/mWrKT8NINzEDPJ5uB7zOvTcWOgIm2tiokBMcDpNMvmCUFMEnycKMCsOo8ch6RTZrF3popeR/0iqSne3BN6vtT1B1YNMPoFUiWMGyCwR4dwNQansiNKx/V3P/uj1gQBFCYqNV2TA7F2HKfDnNjMCuq2tg/yo11DGACYrKZjKfi5UpL/nnP1Rzga3uRKgT5QsYEpL4P3a0xPE1f+CKCFkLIPfo6N7Zr0AVhsSUJrBSlpLL4Cb59mBxy8/YE1ghpRfrsMnGCLLrep9Pmg7Az4vC0C7hUWP2LRMBG5gBJxfTC0sUEquzOdypPa5JsdFr2D+kNQhmt4ieOkCz/Z8YGBXwqqcDKECYWSF8zL3UIW5UNnh2XDltUzBwp9UQKdYGICd2WoCPj4kZY1S6CRk5legLDNrlIi539Hr0kuYj6ipLgVHURTWSfUeAOr4FykK7PHIwXu854P1q5hg/UzyXTRxiXR18g/A2mQB4nOdvH1sb6YgOelxGt+dA/DF1CmzRE1AhY0kRSJ0WydA/824+pdQVlmWcoRenNQ4NqB8X1YZmno8rtJzLP8UknDMbtRNaauDb4IAfo5EQCIRYovWpFACbiSpQx055HC8D/SKSu2C6iZCnbv+QGqI4kPyw11vin+J/RbT89nGurY1tDdPwOjAvqwtxl/3o6e+HDv1LTxGFf46RYTZaPH2iky106tnR+ELjjIz/yCerh8Lf4feANF2031zJGGIIiNnFa0ozxY5EXBQaqebejzndfCUAKNuHm2LGfn9tEKM5g5TAgri6Ap2/4YBLLwY5XTEjZ95O+DHDKUyJHM1RkByOkyTptI0V/D1aCoWrUJA8hRKLrn30FWJgAPSNovTPuZ18GTgnlrDXk7g/8kI0ETRPXptH9TbgRLQE/e3nbS8meKsL3j6PbrvifJvRrHP7uvrwGp5kXn4hBEg/LxBvY1uxKqtKL4/FlgsBK5MBmWbEZIxIfM6eCKk0qAbQ7tCBl0WEV4Xxa2iexRTVTJIXp9fBcq5v8WHngLVxw+AbhsY8A/TAB5fz7x9YdTLSqKTyKszRrI9ZPBmTRn5vJSfC+/HAfxcBjR3kH67clvAE2GlRv8/SwTkke/2GM1UqsSZ95V9iYWLZLoNuDqxMogZ0UXKFkDwxrASpQ2euxXz+0IFPDku/+lPzl3hA/Tz4jrlOaT2YBZgvi3gidBao+4r6fAzlPwd83A/Rz9QHnnbZcXJWUCEDMKK9TtpiBojRViUJEBZNZr7wbcYAegDVIUSyRKdzd/MhbMM0uk5l76lv9lNmm+dwf8SNFJDXp6oCwho8rC0TeDJrDLo3hWMutIGo/5V8jsqMJmVw9MUxUpPSopr05wJgKO8a6iTCBBvpqvDG3mFRkWAZj7LKT5Trrm2hzpQjET7nVceF2cTO57jXYqkdoF3Z1a4MiFMsfmKYqTAYauW6iAgcwmIZWcU4MWnWT1v6cfi/PHRmCpvUWSQljj57iBBu4B+Zv3DcYlYfISSZ4vmTsr6fWQIuFc08B69w9Ru8BIBixsrRg882aodlQkQr0WoVz57letLkkf8aSQJRSeZUSL5AcUHMKLPMwugllR0ghEQw2XK+t0c7/eA4x3B8aMe8Sp4SoBF8ylb4aVOzilCPr0hb4hG0Dh/ZR9U10m5PSHAiqXzDcyGyIuSxGHmbQOoK6DxnThJQ2QjAkzaSbKzdWyjwuOSBWhOO+uHpp8i1QETPcXbJvD0YeTElyh29q9O+3eNrPg6BB9BO7eXw+lZwBNrBMgudgp15LWYsmTHrScKGAETYhpbgHYYtaSkkYoVXTXJBCSotqVR/2FzL3G5W+w2gacPM/uMctT38jgzS/LOPu+ieUYSJUsxM+yO1Z3vJgFKaptviyXkYRCobUSAWfskFl4ibYrUVTICLmxkPUGzxqXrI7/D4Al4v3b1BON7P+E4GSKvvJGZMIju7cJd2hcxVaYECKmfwtWscCi/tFe5rqWphFMo3MndK8RosqmsLPQfl7eDcHyC5EO0H7QEtjnwMgFtTiLQEeY5hyz2bzCaygXTet2HqXJ4k2+FezjJewKhS169H7POH5xftnbIM2tfbQ94mYA2Z1Bg8hmJJOyQmiNh1hgurCJCO5bIKg7zHYQk7CB/J7+3dpL7aiI58kZK57ydvX3rorktKH+3Ik+zkLx20x7wfu3pCXoivEPI61DKekNeh1LWG/I6lLJ3UF6HUrY18v4DHiFLR2gpAoMAAAAASUVORK5CYII=" />
                <h4 style={saunaRoomText}>Sauna and steam room access</h4>
            </div>
            <div className="group-classes">
                <img style={groupClasses} src="data:image/png;base64,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" alt="" />
                <h4 style={groupClassesText}>Group Classes (unlimited)</h4>
            </div>
            <div className="priority-support">
                <img style={prioritySupport} src="/src/assets/images/prioritysupport.png"  />
                <h4 style={prioritySupportText}>Priority Support</h4>
            </div>
            <div className="contract">
                <img src="/src/assets/images/42contract.png" style={contractStyle} />
                <h4 style={contractText}>No Contract</h4>
            </div>
        
            </div>
        </div>
        
    </div>
    <Footer />
    </div>
    </>
  )
};

export default Vipplan;