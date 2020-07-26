import React, {Component} from "react";
import listExperiences from "../../../assets/experience";

class Experience extends Component{
    render() {
        const logo = {
            height: "56px"
        }
        return (
            <section id="experience">
                <h2 className="mb-5 font-weight-bold text-center">EXPERIENCE</h2>
                <div className="row">
                    {
                    listExperiences.map(value => {
                        return (
                            <div className={"card col-md-12 mb-2"} key={value.enterprise}>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <img style={logo} src={value.img}
                                             alt={value.enterprise} className={"img-fluid" +
                                        " text-left"}/>
                                        <span className="grey-text text-right ml-2">
                                            <strong>
                                                {value.enterprise}
                                            </strong>
                                        </span>
                                    </h4>
                                    <hr className="mb-2"/>
                                    <h4>
                                        <strong>
                                            {value.jobTitle} {" "}
                                        </strong>
                                        <span style={{fontSize: "16px"}} className={"grey-text"}>
                                            {"("+value.startDate+" - "+value.endDate+") "}
                                            &middot; {" "+ value.time}
                                        </span>
                                    </h4>
                                    <pre width={"100%"}>
                                        {value.resume}
                                    </pre>
                                </div>
                            </div>
                        );
                    })
                    }
                </div>

            </section>
        );
    }
}
export default Experience