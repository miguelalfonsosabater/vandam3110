
import "./BrandingDescription.css"


const BrandingDesciption = ({onClickDisplayBrand }) => {


    return (


        <div className="brandingBackground">
            <div className="BrandingContainer">
                <button className="CloseButton" onClick={onClickDisplayBrand}>
                    X
                </button>
                <div className="BrandingContents">
                    <div className="BrandingTop">
                        <div className="LogoContainer">

                        </div>
                        <div className="BrandDetailsContainer">
                            <h2 className="BrandName">
                                brandname
                            </h2>
                            <p className="BrandAbout">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas fringilla phasellus. Gravida dictum fusce ut placerat orci nulla. Consectetur a erat nam at lectus urna. Nunc non blandit massa enim nec dui nunc. Aliquet nibh praesent tristique magna sit amet. Nunc non blandit massa enim nec. 
                            </p>
                            <button className="CheckWebsiteButton">
                                CHECK THE WEBSITE
                            </button>

                        </div>

                    </div>

                    
                    <div className="BrandingBottom">
                        <h2 className="SocMedSample">
                            SAMPLE POSTERS
                        </h2>

                        <div className="PosterSampleContainer">
                            <div className="imageSample">

                            </div>

                            <div className="imageSample">

                            </div>

                            <div className="imageSample">

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )


}



export default BrandingDesciption