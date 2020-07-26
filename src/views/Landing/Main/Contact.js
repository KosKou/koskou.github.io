import React, {Component} from "react";
import {
    INSTAGRAM_LINK,
    LINKEDIN_LINK,
    TWITTER_LINK
} from "../../../assets/constants";

class Contact extends Component{
    render() {
        return (
            <section id="contact">

                <h2 className="mb-5 font-weight-bold text-center">CONTACT</h2>

                <div className="row">
                    <div className="col-md-12">
                        <h1 className="teal-text text-center">Let's Connect!</h1>
                        <h2 className="grey-text text-center">
                            Leave a message into one of my social networks
                        </h2>
                        <div className="col-md-12 col-lg-12 text-center text-md-center mb-5 mt-3">
                            {/*<!--Twitter-->*/}
                            <a target={"_blank"} href={TWITTER_LINK} className="tw-ic"
                               rel="noopener noreferrer" >
                                <i className="fab fa-twitter fa-4x blue-text mr-4"> </i>
                            </a>
                            {/*<!--Instagram-->*/}
                            <a target={"_blank"} href={INSTAGRAM_LINK} className="ins-ic"
                               rel="noopener noreferrer" >
                                <i className="fab fa-instagram fa-4x orange-text mr-4"> </i>
                            </a>
                            {/*<!--Linkedin-->*/}
                            <a target={"_blank"} href={LINKEDIN_LINK} className="li-ic"
                               rel="noopener noreferrer" >
                                <i className="fab fa-linkedin fa-4x blue-text"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact