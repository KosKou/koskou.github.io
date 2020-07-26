import React, {Component} from "react";
import About from "./About";
import Expertise from "./Expertise";
import Experience from "./Experience";
import Contact from "./Contact";

class Main extends Component{

    render() {
        return (
            <div className="container">

                <About/>

                <hr className="my-5"/>

                <Expertise/>

                <hr className="my-5"/>

                <Experience/>

                <hr className="my-5"/>

                <Contact/>
            </div>
        )
    }
}

export default Main