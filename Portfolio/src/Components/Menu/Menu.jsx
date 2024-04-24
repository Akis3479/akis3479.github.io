import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Card } from '../Card/Card';
import { ReactTyped } from "react-typed";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { useState } from "react";

const navs = [
  <div>
    <h2>About</h2>
    <nav>
      <a style={{ animationDelay: "0.7s" }}>Profile</a>
      <a style={{ animationDelay: "0.8s" }}>Work</a>
      <a style={{ animationDelay: "0.9s" }}>Skills</a>
      <a style={{ animationDelay: "1s" }}>Projects</a>
    </nav>
  </div>,
  <div>
    <h2>Contact</h2>
    <nav>
      <a href="mailto:akis.sougias96@gmail.com" style={{ animationDelay: "0.8s", display:"flex", alignItems:"center" }}>
        <img src="email.svg" alt="email logo" style={{width:"15%", height:"15%", paddingRight:"10px"}}/>akis.sougias96</a>
      <a href="https://www.instagram.com/akis_sougias/" target="_blank" style={{ animationDelay: "0.9s", display:"flex", alignItems:"center"}}>
        <img src="instagram.svg" alt="Instagram logo" style={{width:"15%", height:"15%", paddingRight:"10px"}}/>Instagram</a>
      <a href="https://github.com/Akis3479" target="_blank"style={{ animationDelay: "1s" , display:"flex", alignItems:"center"}}>
        <img src="github.svg" alt="Git logo" style={{width:"15%", height:"15%", paddingRight:"10px"}}/>GitHub</a>
      <a href="https://www.linkedin.com/in/akis-sougias/" target="_blank" style={{ animationDelay: "1.1s", display:"flex", alignItems:"center" }}>
        <img src="linkedin.svg" alt="linkedin logo" style={{width:"15%", height:"15%", paddingRight:"10px"}}/>LinkedIn</a>
    </nav>
  </div>,
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const openClass = isOpen ? "open" : "";

  return (
    <>
      <div className="blur-load">
        <div className={`background ${openClass}`} loading="lazy"></div>
      </div>
      <div className={`typewriter ${openClass}`}>
        <ReactTyped strings={["Hi!","Under Construction..."]} typeSpeed={60} backSpeed={50}/>
      </div>
      <Card isOpen={openClass} title={"Profile"}/>
      <button className={`burger ${openClass}`} onClick={toggleMenu}></button>
      <div className={`menu ${openClass}`}>
        <Swiper speed={750} modules={[Navigation]} navigation>
          {navs.map((nav, i ) => (
            <SwiperSlide key={i}>{nav}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};