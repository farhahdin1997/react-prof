import React from "react";
import styles from "./ProjectDetail.module.css";

export const ProjectDetail = props => {
  const { name, thumbnail, description } = props.project;
  const projectNo = props.no.toString().padStart(2, "0");
//Styling and rending the information from css and project detailmodule.js
  return (
    <section className={styles.item}>
      <div className={styles.thumbnail}>
        <img src={thumbnail.src} alt={thumbnail.alt} />
      </div>
      <section className={styles.detail}>
  
        <p className={styles.projectName}>{name}</p>
        <p className={styles.projectDes}>
    
          {description.map(line => (
            <p>{line}</p>
          ))}
        </p>
      </section>
    </section>
  );
};
