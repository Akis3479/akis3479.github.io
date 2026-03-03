import "./styles.css";
import PropTypes from 'prop-types';

const skillsData = [
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "ts" },
  { name: "Java", icon: "java" },
  { name: "C++", icon: "cpp" },
  { name: "Python", icon: "python" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Angular", icon: "angular" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "Figma", icon: "figma" },
  { name: "GraphQL", icon: "graphql" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "Linux", icon: "linux" }
];

export const Skills = ({ isOpen }) => {
    return (
        <section className={`skills-container ${isOpen}`}>
            <h1 className="skills-section-title">Tech Stack</h1>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <span className="skill-name">{skill.name}</span>
                        <img
                            src={`https://skillicons.dev/icons?i=${skill.icon}`}
                            alt={`${skill.name} icon`}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

Skills.propTypes = {
    isOpen: PropTypes.string
};
