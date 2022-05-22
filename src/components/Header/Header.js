import React from "react";
import styles from "./Header.module.css";
import { contact as contactData } from "../../assets/data/contact";
import { NavItem } from "./NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//Components defined as classes , 
export class Header extends React.Component {
  constructor() {
    super();
    this.state = { isShown: false, currentPage: "home" };
    this.handleClick = this.handleClick.bind(this);
  }

  /*CLick function*/
  handleClick(e) {
    const newPage = e.currentTarget.getAttribute("value")
      ? e.currentTarget.getAttribute("value")
      : this.state.currentPage;
//setState() enqueues changes to the component state and tells React that this component 
//Its children need to be re-rendered with the updated state.
    this.setState({
      isShown: !this.state.isShown,
      currentPage: newPage
    });
  }

  /*Rending the header */
  /*.stlyes is styling that atribute, contactdata is rending the date from contact.js in data */
  render() {
    //Displays the nav bar*/
    /*Displays nav icon with click functions to allow the user to click and direct to right page*/
    return (
      <header className={styles.header}>
        <div>
          <p className={styles.name}>{contactData.name}</p>
          <p className={styles.job}>{contactData.job}</p>
        </div>

        <nav
          className={
            styles.navBar + " " + (this.state.isShown ? styles.show : "")
          }
        >
          <FontAwesomeIcon
            icon={faBars}
            className={styles.icon}
            onClick={this.handleClick}
          />
          <FontAwesomeIcon
            id="close"
            icon={faTimes}
            className={styles.icon + " " + styles.close}
            onClick={this.handleClick}
          />
          <ul>
            <NavItem
              id="nav_home"
              target="/"
              value="home"
              onClick={this.handleClick}
              currentPage={this.state.currentPage}
            />
           
            <NavItem
              id="nav_projects"
              target="/projects"
              value="projects"
              onClick={this.handleClick}
              currentPage={this.state.currentPage}
            />
            <NavItem
              id="nav_contact"
              target="/contact"
              value="contact"
              onClick={this.handleClick}
              currentPage={this.state.currentPage}
            />
          </ul>
       
   
        </nav>
      </header>
    );
  }
}
