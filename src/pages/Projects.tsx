import '../css/Projects.css'
import platform from '../features/Projects/assets/SitS_platform.jpeg'
import caPage from '../features/Projects/assets/Carbon_Analytics_Page.jpeg'
import spotify_platform from '../features/Projects/assets/Spotify_Analytics_Graph.jpeg'


function Projects() {
    return (
    <div className="projects-page">
        <div className="project-container">
            <div className='proj-pic'>
                    <img src={caPage}></img>
                </div>
                <div className="description">
                    <h2>
                        Carbon Emissions Analytics Platform
                    </h2>
                    <h4>
                        Description
                    </h4>
                    <p>
                        As part of my graduate coursework, I led a group of 4 students in the full-stack
                        development of a comprehensive Carbon Analytics Platform. This platform was meticulously 
                        developed using Docker containerization, ensuring extensibility and simplified deployment.
                        My leadership was instrumental in delivering a user-friendly front-end 
                        interface, enhancing accessibility and usability, and in orchestrating the integration of 
                        engineering contributions into a cohesive platform using Git. I also deepened my understanding 
                        in building robust Rest APIs to securely retrieve data from the PostgreSQL database and display
                        it on the frontend. The platform design supports analytics visualization for companies intending 
                        to better manage their carbon emissions or companies working with multiple clients to help identify
                        areas of improvement in their clients' business processes. 
                    </p>
                    <h4>
                        Technical Skills
                    </h4>
                    <p>
                        Relational Database Design, PostgreSQL, FastAPI Rest API, Docker, SQLAlchemy, Python, and SQL
                    </p>
                </div>
            </div>
        <div className="project-container">
            <div className='proj-pic'>
                <img src={platform}></img>
            </div>
            <div className="description">
                <h2>
                    In-Situ Environmental Sensor Collection and Analytics Platform
                </h2>
                <h4>
                    Description
                </h4>
                <p>
                    The SitS system is an NSF-funded project aimed at creating a remote 
                    sensing platform that is able to collect and store environmental data 
                    without the need for outside power or network connections. The system 
                    would automate data collection, allowing for cheap and reliable access
                    to a large amount of environmental data regarding soil composition and health.
                </p>
                <h4>
                    Purpose
                </h4>
                <p>
                    Our project created a reliable and low-cost data collection 
                    method that required limited researcher interaction. Previously, 
                    researchers have had to manually take soil core samples to retrieve
                    the soil data we were targeting, and this is expensive and labor intensive
                     for tracking long-term changes over time. Our platform can create a large 
                     data set tracking changes in soil organic matter content in order to yield 
                     a spatially and temporally significant data set that can be used
                     to determine the changes in the health of the environment over time.
                     
                </p>
                <h4>
                    Progress
                </h4>
                <p> Utilizing the FabLab at UGA we constructed the platform to be deployed 
                    in a saltwater marshland environment. Rapid prototyping was undertaken
                    to make the platform suitable for outdoor deployment. We tested our platform 
                    in a remote wetland area in Athens, GA to assess the reliability of sensing 
                    operations and the platform's stability. I identified areas where there could
                    be significant improvement, and I designed and implemented components to improve 
                    the system's robustness with both software and structural improvements.
                    My software failsafe mechanism helped prevent loss of data in low power or power
                    failure scenarios, and it logged information to help diagnose the point of failure.
                    This mechanism was used in our first test of the platform, successfully identifying 
                    battery failure after water compromised the battery's housing.
                </p>
            </div>
        </div>
        <div className="project-container">
            <div className='proj-pic'>
                <img src={spotify_platform}></img>
            </div>
            <div className="description">
                <h2>
                    Spotify Song Popularity Analytics
                </h2>
                <h4>
                    Description
                </h4>
                <p>
                    I executed API requests to Spotify's WebAPI to create a dataset of popular songs on the platform. 
                    With that data I was able to train SVM and Random Forest machine learning models to determine 
                    the relation between certain attributes like 'danceability','energy', and 'valence' and a song's 
                    popularity. With this I experimented with various techniques such as kernel selection, parameter 
                    tuning, cross-validation, feature selection, bootstrapping, and ensemble methods to improve the 
                    generalization of the models. I also performed visualization techniques on my findings to better
                    present my results and identify areas of improvement. After presenting the results, I took feedback
                    and improved model accuracy by 26% by performing hyperparameter tuning and enhancing data quality.

                </p>
                <h4>
                    Technical Skills
                </h4>
                <p>
                    ML Tools: Scikit-learn, Matplotlib, NumPy, and Pandas
                </p>
                <p>
                    Jupyter Notebook, Python, Anaconda, Rest API, SVM, and Random Forest
                </p>
                
            </div>
        </div>
        <div className="project-container">
            <div className='proj-pic'>
                <iframe className="figma" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl1KDACe5o4A8oKVqKu2lma%2FMilestone-3-Part-B%3Ftype%3Ddesign%26node-id%3D263%253A2%26t%3Dl8VfEwnCCR9MQVoN-1" allowFullScreen></iframe>
            </div>
            <div className="description">
                <h2>
                    UX Redesign RampantStrategy
                </h2>
                <h4>
                    Description
                </h4>
                <p>
                    Educational technology is meant to aid in student learning and interaction with the instructor, but Rampant Strategy, a tool for educational technology, failed to facilitate communication effectively.
                    In response to this, we created a new, accessible website experience to foster a collaborative learning environment and promote clear communication between instructor and student.
                    For further detail check out our website designs using the popular UI design tool Figma.
                </p>
            </div>
        </div>
    </div>
    )
}

export default Projects