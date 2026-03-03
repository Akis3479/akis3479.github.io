import "./styles.css";
import PropTypes from 'prop-types';

const skillsData = [
    { id: 'js', name: 'JavaScript' },
    { id: 'ts', name: 'TypeScript' },
    { id: 'java', name: 'Java' },
    { id: 'cpp', name: 'C++' },
    { id: 'python', name: 'Python' },
    { id: 'react', name: 'React' },
    { id: 'nextjs', name: 'Next.js' },
    { id: 'angular', name: 'Angular' },
    { id: 'nodejs', name: 'Node.js' },
    { id: 'express', name: 'Express' },
    { id: 'mongodb', name: 'MongoDB' },
    { id: 'mysql', name: 'MySQL' },
    { id: 'postgres', name: 'PostgreSQL' },
    { id: 'docker', name: 'Docker' },
    { id: 'git', name: 'Git' },
    { id: 'figma', name: 'Figma' },
    { id: 'graphql', name: 'GraphQL' },
    { id: 'html', name: 'HTML' },
    { id: 'css', name: 'CSS' },
    { id: 'linux', name: 'Linux' }
];

export const Skills = ({ isOpen }) => {
    return (
        <section className={`page skills-page ${isOpen}`}>
            <h1 className="section-title">Tech Stack</h1>
            <div className="skills-container">
                <div className="skills-grid">
                    {skillsData.map((skill) => (
                        <div key={skill.id} className="skill-card">
                            <span className="skill-name">{skill.name}</span>
                            <img
                                src={`https://skillicons.dev/icons?i=${skill.id}`}
                                alt={skill.name}
                                className="skill-icon"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

Skills.propTypes = {
    isOpen: PropTypes.string
};
