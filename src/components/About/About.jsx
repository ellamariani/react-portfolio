import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>My Journey</h3>
              <p>
              My interest sparked in high school when I took an engineering pathway, with this experience it sparked my interest in how things work and how technology can be used to solve problems. The hands on projects and collaborative environment in my high school engineering classes laid a solid foundation for my passion for the field. As I progressed, I started learning various programming languages and frameworks. Today, I am skilled in many frameworks and languages.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Development</h3>
              <p>
              On the front end, I enjoy creating responsive and optimized websites that provide a seamless user experience. I have worked on projects like a Currency Converter Chrome Extension and other projects down below, where I utilized my skills in JavaScript, HTML, and CSS to bring my ideas to life.On the back end, I am fascinated by the complexities of server side logic and database management. I have experience developing fast and optimized back end systems and APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/gaming.png")} alt="Gaming icon" />
            <div className={styles.aboutItemText}>
              <h3>Personal Interests</h3>
              <p>
                Outside of my academic and profession pursuits, I enjoy reading, gaming, working out, and experimenting with new baking recipes in the kitchen. I am always eager to learn new things and take on new challenges. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
