import React from "react";
import styles from "./Main.module.css";
import { Home } from "./Home/Home";

import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import { Route } from "react-router-dom";

//Routing is a process in which a user is directed to different pages based on their action or request.
export const Main = () => {
  return (
    <main className={styles.main}>
      <Route path="/" exact component={Home} />
       <Route path="/projects/" component={Projects} /> 
      <Route path="/contact/" component={Contact} />
      
    </main>
  );
};
