
import "./BrandingDescription.css"


const BrandingDesciption = ({ onClickDisplayBrand, selectedItem }) => {

    const brandColor = selectedItem.backgroundColor
    const buttonColor = selectedItem.buttonColor



    return (


        <div className="brandingBackground">
            <div className="BrandingContainer">
                <div className="BrandingContents">
                    <div className="BrandingTop">
                        <img className="LogoContainer" src={selectedItem.logo} alt={selectedItem.brandname} />
                        <div className="BrandDetailsContainer" style={{ backgroundColor: brandColor }}>
                            <button className="CloseButton"
                                style={{ backgroundColor: buttonColor, color:brandColor  }}
                                onClick={onClickDisplayBrand}>
                                X
                            </button>
                            <h2 className="BrandName">
                                {selectedItem.brandname}
                            </h2>
                            <p className="BrandAbout">
                                {selectedItem.details}
                            </p>
                            <button 
                            className="CheckWebsiteButton" 
                            style={{ backgroundColor: buttonColor, color:brandColor }}
                            
                            >
                                CHECK THE WEBSITE
                            </button>

                        </div>

                    </div>


                    <div className="BrandingBottom" style={{ backgroundColor: brandColor }}>
                        <h2 className="SocMedSample">
                            SAMPLE POSTERS
                        </h2>

                        <div className="PosterSampleContainer">
                            <div className="imageSample" style={{ backgroundColor: buttonColor }}>

                            </div>

                            <div className="imageSample" style={{ backgroundColor: buttonColor }}>

                            </div>

                            <div className="imageSample" style={{ backgroundColor: buttonColor }}>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )


}



export default BrandingDesciption