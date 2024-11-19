import './AboutMe.css'
import photo from '../assets/prof-photo.jpeg'

function AboutMe() {
    return (
        <div className="bio-container">
            <div className="image-container">
                <img className="prof-photo" src={photo} alt="Image Failed to Load"></img>
                <h1>Kevin Nyquist</h1>
            </div>
            <div className="bio">
                <p>
                    Hello, I graduated from the University of Georgia with a MS and BS in Computer Science, 
                    and I'm currently pursuing technology roles involved with Software Development and Solution or Data Engineering. 
                </p>
                <p>
                    In my free time I enjoy hiking, cooking, woodworking, and photography (Like this one in the background).
                </p>
            </div>
        </div>
    )
}

export default AboutMe;