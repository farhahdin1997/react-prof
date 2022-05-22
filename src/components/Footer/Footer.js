import React from "react";
import styles from "./Footer.module.css";
import styleIcon from "../Common/LinkIcon.module.css";
import { LinkIcon } from "../Common/LinkIcon";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { contact as contactData } from "../../assets/data/contact";

/*Declaring the icons*/
export const Footer = () => {
  const { linkedin, Twitter,  github } = contactData;

  /*Rending the icons on the footer*/
  /*Getting the link from data in assets folder < contacts*/
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <section className={styles.item}>
          <p>
            <LinkIcon
              href={linkedin}
              icon={faLinkedin}
              style={styleIcon.small}
            />
{/*           
             <LinkIcon href={Twitter}
              icon={faTwitter} style={styleIcon.small} />  */}
            <LinkIcon href={github} icon={faGithub} style={styleIcon.small} /> 
          </p>
        </section>
        <section
          className={styles.item} >
        </section>
      </section>
    </footer>
  );
};
