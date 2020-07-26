import React, {Component} from "react";
import {ABOUT_TEXT} from "../../../assets/constants";
import ProfilePic from "../../../assets/img/BackOffice.jpeg";
import ScrollAnimation from 'react-animate-on-scroll';

class About extends Component{
    render() {
        return (
            <section id="about" className="text-center my-5">

                <h2 className="mb-5 font-weight-bold">ABOUT</h2>

                <div className="row d-flex justify-content-center mb-4">

                    <div className="col-md-8" style={{fontSize: "24px"}} >
                        <ScrollAnimation animateIn="bounceInLeft"
                                         animateOut={"bounceOutLeft"}>
                            <div className={"profile-pic"}>
                                <img src={ProfilePic} alt={"Banner Gonzales, FullStack developer"}/>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="bounceInRight"
                                         animateOut={"bounceOutRight"}>
                            <p className="grey-text font-weight-bold">
                                {ABOUT_TEXT}
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        );
    }
}

export default About