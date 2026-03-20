import PropTypes from 'prop-types';
import './styles.css';

export const GithubStats = ({ isOpen }) => {
    return (
        <section className={`github-container ${isOpen}`}>
            <h1 className="github-section-title">GitHub Statistics</h1>
            <div className="github-stats-content">
                <a href="https://github.com/Akis3479" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://github-readme-stats.vercel.app/api?username=Akis3479&show_icons=true&theme=radical"
                        alt="Akis3479 GitHub Stats"
                        loading="lazy"
                    />
                </a>
            </div>
        </section>
    );
};

GithubStats.propTypes = {
    isOpen: PropTypes.string
};
