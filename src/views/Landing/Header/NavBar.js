import React, {Component} from "react";
import Banner from "../../../assets/img/BanneGonzalesWhite.png";
import {
    GITHUB_LINK,
    INSTAGRAM_LINK,
    LINKEDIN_LINK,
    TWITTER_LINK,
    YOUTUBE_LINK
} from "../../../assets/constants";

class NavBar extends Component{

    render() {
        return (
            <nav className={"navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar"}>
                <div className="container">
                    <a className="navbar-brand" href="#intro">
                        <img src={Banner} alt="RecFilms" width="60px"/>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#customNav"
                            aria-controls="customNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={"collapse navbar-collapse"}>
                        {/*Nav Links*/}
                        <ul className={"navbar-nav mr-auto"}>
                            <li className="nav-item">
                                <a className="nav-link" href="#intro">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#expertise">Expertise</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="#contact">Contact</a>
                            </li>
                        </ul>

                        {/*Social Icons*/}
                        <ul className={"navbar-nav nav-flex-icons"}>
                            <li className={"nav-item"}>
                                <a href={LINKEDIN_LINK} target="_blank" className={"nav-link"}
                                   rel="noopener noreferrer" >
                                    <i className={"fab fa-linkedin fa-2x blue-text"}></i>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href={INSTAGRAM_LINK} className="nav-link" target={"_blank"}
                                   rel="noopener noreferrer">
                                    <i className="fab fa-instagram fa-2x orange-text"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href={TWITTER_LINK} className="nav-link" target={"_blank"}
                                   rel="noopener noreferrer">
                                    <i className="fab fa-twitter fa-2x blue-text"></i></a>
                            </li>
                            <li className="nav-item">
                                <a href={YOUTUBE_LINK} className="nav-link" target={"_blank"}
                                   rel="noopener noreferrer">
                                    <i className="fab fa-youtube fa-2x red-text"></i></a>
                            </li>
                            <li className="nav-item">
                                <a href={GITHUB_LINK} className="nav-link" target={"_blank"}
                                   rel="noopener noreferrer">
                                    <i className="fab fa-github fa-2x white-text"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;