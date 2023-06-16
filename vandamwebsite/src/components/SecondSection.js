
import "./SecondSection.css"




const SecondSection = () => {


    return (

        <div className="SecondSectionContainer" id="AboutSection">
            <h2 className='H2Container'>ABOUT ME</h2>

            <div className="AboutSectionContainer">
                <div className="AboutSectionLeft">
                    <img className="miguelImageContainer" src="https://res.cloudinary.com/dsn8zvh4a/image/upload/v1686875515/miguelS_arkcmw.png">

                    </img>
                </div>

                <div className="AboutSectionRight" >
                    <h2 className="nameContainer"> MIGUEL ALFONSO SABATER</h2>
                    <h3 className="titleContainer"> Graphic Designer | Web Developer </h3>
                    <p className="aboutContentContainer">
                        A passionate and experienced graphic designer and web developer with a strong background in marketing management. With seven years of expertise in graphic design and three years in web development, I have honed my skills to create visually appealing and functional designs.
                        <br></br>
                        <br></br>
                        I hold a degree in Business with a major in Marketing Management, which has provided me with a solid foundation in understanding consumer behavior and crafting effective marketing strategies. Alongside my design and development skills, I also possess extensive experience in brand management, events management, and social media management.
                        <br></br>
                        <br></br>
                        Ready to witness the power of my creativity and expertise? Explore my portfolio below, where you'll find a collection of sample brands I've brought to life – from captivating logos and impactful branding to eye-catching posters and stunning websites. Let my work speak for itself and inspire your next project.
                    </p>
                    <div className="blinkArrowContainer">

                    <a href='#FirstSectionContainer'>
                        <div className="blink-arrow3"
                        ></div>
                    </a>
                        </div>

                </div>

            </div>

        </div>
    )


}

export default SecondSection