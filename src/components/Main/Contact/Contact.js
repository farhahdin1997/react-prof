import React from "react";
import styles from "./Contact.module.css";
import styleIcon from "../../Common/LinkIcon.module.css";
import { LinkIcon } from "../../Common/LinkIcon";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { contact as contactData } from "../../../assets/data/contact";


//Shows contact form to allow users to contact */
/*Alert shows if invaild details are entered*/
const handleClick = e => {
  e.preventDefault();
  alert(`Invaild`);
};

export const Contact = () => {
  const { linkedin, github, phone, email } = contactData;
/*Displays the social media links and the data is stored in assets < data < contact*/
  /*Also a form is displayed to allow users to input data*/
return (
    <section className={styles.contact}>
      <h1>Contact</h1>
      <section className={styles.container}>
        <section>
          <section className={styles.info}>
            <section>
              <LinkIcon
                href={linkedin}
                icon={faLinkedin}
                style={styleIcon.large}
              />
              <LinkIcon href={github} icon={faGithub} style={styleIcon.large} />
            </section>
            <p>
              <b>Cell:</b> {phone}
            </p>
            <p>
              <b>Email:</b> {email}
            </p>
          </section>
        </section>
        <section>
 
          <form>
            <input type="text" placeholder="Name *" required />
            <input type="email" placeholder="Email *" required />
            <input type="text" placeholder="Subject" />
            <textarea type="text" placeholder="Message" rows="10" />
            <input type="submit" value="Send" onClick={handleClick} />
          </form>
        </section>
      </section>
    </section>
  );
};
