import React, {Component} from "react";
import Landscape from "../../../assets/img/Landscape.jpg"
import LoopedText from "../../../components/LoopedText/LoopedText";
import Resume from "../../../assets/files/EN-CV-BANNERGONZALES.pdf";

class Mask extends Component {
    render() {
        const landscapeImage = {
            background: "url("+Landscape+") no-repeat center center fixed"
        }
        return (
            <div id="intro" className={"view"} style={landscapeImage}>
                <div className={"mask rgba-black-strong"}>
                    <div className={"container-fluid d-flex align-items-center justify-content-center h-100"}>
                        <div className={"row d-flex justify-content-center text-center"}>
                            <div className={"col-md-12"}>
                                <div className={"text-center"}>
                                    <p className={"white-text"} style={{fontSize: "40px"}}>
                                        BANNER <b>GONZALES</b>
                                    </p>
                                </div>
                                <hr className={"hr-light"}/>
                                <LoopedText
                                animateTime={5000}
                                animationIn={"bounceInDown"}
                                animationOut={"bounceOut"}
                                fontSize={"6vw"}
                                class={"white-text col-md-12"}>
                                    <span>FullStack Developer</span>
                                    <span>Systems Engineering Bachelor</span>
                                    <span>Life Learner</span>
                                    <span>Solutions Maker</span>
                                </LoopedText>
                                <p className={"white-text col-md-12"}
                                   style={{opacity: "0.5", fontSize: "24px"}}>
                                    from Per&uacute;
                                </p>
                                <a href={Resume} target={"_blank"} rel="noopener noreferrer">
                                    <button type="button" className={"btn btn-outline-white"}>
                                        Download CV
                                        <i className={"fas fa-book ml-2"}/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        )
    }

}

export default Mask;
