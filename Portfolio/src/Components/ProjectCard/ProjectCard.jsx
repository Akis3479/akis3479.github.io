import "./styles.css";

const cards = [
    {
        name: "Internship Submit Platform",
        id: "green",
        description: "Technology : MERN stack React, MongoDB, ExpressJS, Node",
        footer: "Bachelor's Thesis project",
        link: "https://github.com/Akis3479/ThesisProject-InternshipApp",
        more: "Designed and developed full-stack web application platform to facilitate university students' access to internship opportunities. Implemented with React Forms for seamless application submission and file uploads. Admin capabilities include application management via intuitive tables. Integrated authentication via the university's email database for secure access.",
    },
    {
        name: "Information Retrieval Project",
        id: "blue",
        description: "Technology : Java",
        footer: "Two-Person University Project",
        link: "https://github.com/Akis3479/Information-Retrieval-Systems-Project---hy463",
        more: "Engineered an Information Retrieval System encompassing indexing, question rating, and results evaluation functionalities.",
    },
    {
        name: "Interpeted Language Implementation",
        id: "red",
        description: "Technology : C++",
        footer: "Three-Person University Project",
        link: "https://github.com/Akis3479/Compilers-Project---hy340",
        more: "Engineered a full-fledged compiler leveraging Lex and Yacc-type tools, alongside the development of the alpha virtual machine and creation of essential library functions. ",
    },
    {
        name: "Fullstack App For Smart Conference Room",
        id: "blue",
        description: "Technology : MEAN Stack, Docker",
        footer: "Three-Person University Project",
        link: "https://github.com/Akis3479/hy469",
        more: "Crafted an Innovative Smart Room App tailored for collaborative brainstorming, featuring touch-sensitive walls for simultaneous input from all team members. Real-time feedback fosters an immersive creative process. Developed using MEAN stack seamlessly integrated with Docker for robust deployment and scalability. ",
    },
    {
        name: "Hospital database management Project",
        id: "green",
        description: "Technology : Java, mySQL, JDBC",
        footer: "Two-Person University Project",
        link: "https://github.com/Akis3479/databaseProject-hy360",
        more: "Created a hospital application tailored for doctors and staff to efficiently manage COVID-19 emergency patients.  ",
    },
];

export const ProjectCard = ({ isOpen }) => {
    return (
        <section className={`page card-1-page ${isOpen}`}>
            <h1 className="section2-title"> Projects</h1>
            <div className="cards">
                {cards.map((card, i) => (
                    <label key={i} id={card.id}>
                        <input type="checkbox" />
                        <div className="card">
                            <div className="front">
                                <header>
                                    <h2>{card.name}</h2>
                                </header>
                                <var>{card.total}</var>
                                <h3>{card.description}</h3>
                                <h4>{card.footer}</h4>
                                <a href={card.link} target="_blank"style={{display:"flex", alignItems:"center"}}>
        <img src="github.svg" alt="Git logo" className="gitLink" style={{width:"10%", height:"10%"}}/></a>
                                <div className="material-symbols-outlined"> more </div>
                            </div>
                            <div className="back">
                                <header>
                                    <h2>{card.name}</h2>
                                </header>
                                <p>{card.more}</p>
                                <span className="material-symbols-outlined"> close </span>
                            </div>
                        </div>
                    </label>
                ))}
            </div>
        </section>
    );
};