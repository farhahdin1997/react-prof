import React from "react";
import styles from "./Home.module.css";

import { contact as contactData } from "../../../assets/data/contact";

export const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.avatar}>
        <img src={contactData.avatar.src} alt={contactData.avatar.alt} />
      </div>
      <section className={styles.hello}>
        <p>My Name is farhah</p>
        
      </section>
    
      <p className={styles.intro}>
      My name is farhah , i am 24 years old from Nuneaton. I have a kenyan/pakistani background. I am a recent graduate in IT and
         Business who is also inspiring to be a web developer and devlop my carear in tech
      </p>
    </section>
  );
};
