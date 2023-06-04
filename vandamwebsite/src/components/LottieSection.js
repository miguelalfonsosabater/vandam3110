import React from "react";
import Lottie from "lottie-react"
import VandamLottie from "../assets/VandamLottie.json"
import "./LottieSection.css"


const LottieSection = ({ navigateTo }) => {


    return (

        <div className="LottieContainer">

            <Lottie animationData={VandamLottie} loop={true} speed={0.2} className="lottieItself" />
            <p className="LottieText">Let's create something awesome!</p>
            <div className="blink-arrow" onClick={navigateTo}></div>
            <div className="blink-arrow blink-arrow2" onClick={navigateTo}></div>

        </div>
    )


}


export default LottieSection