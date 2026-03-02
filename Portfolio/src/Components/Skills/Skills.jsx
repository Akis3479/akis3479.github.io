import "./styles.css";
import PropTypes from 'prop-types';

export const Skills = ({ isOpen }) => {
    return (
        <section className={`page skills-page ${isOpen}`}>
            <h1 className="section-title">Tech Stack</h1>
            <div className="skills-container">
                <img
                    src="https://skillicons.dev/icons?i=js,ts,java,cpp,python,react,nextjs,angular,nodejs,express,mongodb,mysql,postgres,docker,git,figma,graphql,html,css,linux&perline=10"
                    alt="My Tech Stack"
                    className="skills-image"
                />
            </div>
        </section>
    );
};

Skills.propTypes = {
    isOpen: PropTypes.string
};
