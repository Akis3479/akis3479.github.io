import profile from './assets/image.jpg';
import ResumeDoc from './assets/resume.pdf';
import "./styles.css";


export const Card = ({ isOpen }) => {
    return (
        <div className={`card-container ${isOpen}`}>
            <h1>Profile</h1>
            <div className="card">
                <img src={profile} loading="lazy" />
                <div>
                    <h2>Akis Sougias</h2>
                    <h3>Frontend developer <br></br> Design Pattern Enthusiast</h3>
                    <p>
                        As a dedicated and dependable Computer Science professional, I excel in web application development.
                        I bring strong organizational skills, a proactive approach, and a collaborative mindset to any team.
                    </p>
                    <a href={ResumeDoc} download="AkisSougias_Resume" target="_blank">
                        <button>Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
}