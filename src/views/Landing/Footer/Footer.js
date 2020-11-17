import React, {Component} from "react";
import {
    GITHUB_LINK,
    INSTAGRAM_LINK,
    LINKEDIN_LINK,
    TWITTER_LINK,
    YOUTUBE_LINK
} from "../../../assets/constants";

class Footer extends Component{

    render() {
        const customWidth = {
            width: "60px"
        }
        return (
            <footer className="page-footer  unique-color-dark">
                <div className="primary-color">
                    <div className="container">
                        <div className="row py-4 d-flex align-items-center">

                            <div
                                className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 white-text">
                                    Follow me on my social networks!
                                </h6>
                            </div>

                            <div className="col-md-6 col-lg-7 text-center text-md-right">
                                {/*<!--GitHub-->*/}
                                <a target={"_blank"} href={GITHUB_LINK} className="fb-ic ml-0"
                                   rel="noopener noreferrer" >
                                    <i className="fab fa-github white-text mr-4"> </i>
                                </a>
                                {/*<!--Twitter-->*/}
                                <a target={"_blank"} href={TWITTER_LINK} className="tw-ic"
                                   rel="noopener noreferrer" >
                                    <i className="fab fa-twitter white-text mr-4"> </i>
                                </a>
                                {/*<!--Linkedin-->*/}
                                <a target={"_blank"} href={LINKEDIN_LINK} className="li-ic"
                                   rel="noopener noreferrer" >
                                    <i className="fab fa-linkedin-in white-text mr-4"> </i>
                                </a>
                                {/*<!--Instagram-->*/}
                                <a target={"_blank"} href={INSTAGRAM_LINK} className="ins-ic"
                                   rel="noopener noreferrer" >
                                    <i className="fab fa-instagram white-text mr-lg-4"> </i>
                                </a>
                                {/*<!--Youtube-->*/}
                                <a target={"_blank"} href={YOUTUBE_LINK} className="ins-ic"
                                   rel="noopener noreferrer" >
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container mt-5 mb-4 text-center text-md-left">
                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>KOSKOU'S HOME</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={customWidth} />
                                <p>
                                    A win to win lookup.
                                </p>
                            <a href="https://koskou.github.io/rec-films/" target={"_blank"}
                               rel="noopener noreferrer">
                                Check now Rec-Films Page
                            </a>
                        </div>

                        <div className="col-md-5 col-lg-4 col-xl-4 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Expertise</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={customWidth}/>
                                <p>
                                    <a href="#!">Reactive Programming</a>
                                </p>
                                <p>
                                    <a href="#!">ReactJs</a>
                                </p>
                                <p>
                                    <a href="#!">Microservices</a>
                                </p>
                                <p>
                                    <a href="#!">ABAP</a>
                                </p>
                                <p>
                                    <a href="#!">RPA Automation Anywhere</a>
                                </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Contact</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={customWidth} />
                                <p>
                                    <i className="fas fa-home  mr-3"/> Lima, Chaclacayo PE
                                </p>
                                <p>
                                    <i className="fas fa-envelope mr-3"/> koskoudev@gmail.com
                                </p>
                                <p>
                                    <i className="fas fa-phone mr-3"/> + 51 994 486 755
                                </p>
                        </div>

                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="#intro" className="font-weight-bold"> Banner Gonzales</a>
                </div>
            </footer>
        );
    }
}

export default Footer;