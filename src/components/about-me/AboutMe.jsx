import { useContext } from "react"
import { BasicInfoContext } from "../context/BasicInfoContext"
import "./AboutMe.css"

const AboutMe = () => {

    const profilePicture = import.meta.env.VITE_PROFILE_PICTURE_URL

    const info = useContext(BasicInfoContext)

    return(
        <div className="about-container">
            <div className="about-picture">
                <img src={profilePicture} alt="Profile-Picture" />
            </div>
            <div className="about-bio">
                <h2>- About me:</h2>
                <p className="bio">
                    I consider myself as a <strong>"Social Motherfucker!!!"</strong> because I am a fan of black humor,<br />
                    I love the beach, I am a <strong>drinker</strong>(mostly when I am alone) and also a <strong>"Cigar Aficionado"</strong>.<br/> 
                    Huge fan of boxing, MMA and Football, I also like Rock, Pop, Bachata, Merengue,<br/> 
                    and every other genre after drinks will do the job!!!. XD<br/><br/>

                    Currently I am retaking my journey as a developer, to get the knowledge need it<br/> 
                    to find better working oportunities.<br/> 
                </p><br/> 
                <div className="about-courses">
                    <h2>- My Courses:</h2>
                    <ul>
                        <li>{info.courses[0]}</li>
                        <li>{info.courses[1]}</li>
                        <li>{info.courses[2]}</li>
                        <li>{info.courses[3]}</li>
                        <li>{info.courses[4]}</li>
                        <li>{info.courses[5]}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutMe