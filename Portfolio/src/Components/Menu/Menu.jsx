import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { useState } from "react";

const navs = [
  <div>
    <h2>About</h2>
    <nav>
      <a style={{ animationDelay: "0.7s" }}>Profile</a>
      <a style={{ animationDelay: "0.8s" }}>Education</a>
      <a style={{ animationDelay: "0.9s" }}>Work</a>
      <a style={{ animationDelay: "1s" }}>Skills</a>
      <a style={{ animationDelay: "1.1s" }}>Projects</a>
    </nav>
  </div>,
  <div>
    <h2>Contact</h2>
    <nav>
      <a href="mailto:akis.sougias96@gmail.com" style={{ animationDelay: "0.8s", display:"flex", alignItems:"center" }}>
        <img src="email.svg" alt="email logo" style={{width:"15%", height:"15%", paddingRight:"6px"}}/>akis.sougias96</a>
      <a href="https://www.instagram.com/akis_sougias/" target="_blank" style={{ animationDelay: "0.9s", display:"flex", alignItems:"center"}}>
        <img src="instagram.svg" alt="Instagram logo" style={{width:"15%", height:"15%", paddingRight:"4px"}}/>Instagram</a>
      <a href="https://github.com/Akis3479" target="_blank"style={{ animationDelay: "1s" , display:"flex", alignItems:"center"}}>
        <img src="github.svg" alt="Git logo" style={{width:"15%", height:"15%", paddingRight:"6px"}}/>GitHub</a>
      <a href="https://www.linkedin.com/in/akis-sougias/" target="_blank" style={{ animationDelay: "1.1s", display:"flex", alignItems:"center" }}>
        <img src="linkedin.svg" alt="linkedin logo" style={{width:"15%", height:"15%", paddingRight:"6px"}}/>LinkedIn</a>
    </nav>
  </div>,
];

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const openClass = isOpen ? "open" : "";

  return (
    <>
      <div className={`background ${openClass}`}></div>
      <button className={`burger ${openClass}`} onClick={toggleMenu}></button>
      <div className={`menu ${openClass}`}>
        <Swiper speed={750} modules={[Navigation]} navigation>
          {navs.map((nav) => (
            <SwiperSlide>{nav}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};