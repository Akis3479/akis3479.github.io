import profile from './assets/image.jpg';
import "./styles.css";


export const Card = ({isOpen}) => {
    return (
        <div className={`card-container ${isOpen}`}>
            <div className="card">
                    <img src={profile} loading="lazy" />
                <div>
                    <h2>Akis Sougias</h2>
                    <h3>Frontend developer <br></br> Design Pattern Enthusiast</h3>
                    <p>
                    As a dedicated and dependable Computer Science professional, I excel in web application development. 
                    I bring strong organizational skills, a proactive approach, and a collaborative mindset to any team. 
                    </p>
                    <button>Resume</button>
                </div>
            </div>
        </div>
    );
}