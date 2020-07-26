import React, {Component} from "react";
import knowledge from "../../../assets/knowledge"
import ScrollAnimation from "react-animate-on-scroll";

class Expertise extends Component{
    render() {
        return (
            <section id="expertise" className="text-center">

                <h2 className="mb-5 font-weight-bold">EXPERTISE</h2>

                <div className="row">
                    {knowledge.map(value => {
                        return (
                            <div className="col-lg-4 col-md-12 mb-4" key={value.title}>
                                <ScrollAnimation animateIn={"bounceInLeft"}
                                                 animateOut={"bounceOutRight"}>
                                    <img alt={value.title}
                                         src={value.img} style={{height: "200px"}}
                                         className="img-fluid"/>
                                    <h4 className="my-4 font-weight-bold">{value.title}</h4>
                                    <p className="grey-text">
                                        {value.description}
                                    </p>
                                </ScrollAnimation>
                            </div>
                        )
                    })}
                </div>
            </section>
        );
    }
}
export default Expertise