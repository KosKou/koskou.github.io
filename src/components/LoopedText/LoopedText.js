import React, {Component} from "react";
import {Animated} from "react-animated-css";

class LoopedText extends Component{

    constructor(props) {
        super(props);
        this.state = {
            loopedText: props.children[0].props.children,
            test: true
        }
        this.loopTexT = this.loopTexT.bind(this)


    }

    componentDidMount() {
        let midTime = (this.props.animateTime/2);
        try {
            this.timeout = setInterval(async () => {
                this.loopTexT();
            }, this.props.animateTime);
        } catch(e) {
            console.log(e);
        }
        try {
            this.timeout = setInterval(async () => {
                this.setState({
                    test: !this.state.test
                })
            }, midTime);
        } catch(e) {
            console.log(e);
        }

    }

    loopTexT() {
        let currentText = "";
        let childrenLength = this.props.children.length;
        let limit = childrenLength - 1;
        if (this.state.loopedText === ""){
            currentText = this.props.children[0].props.children;
        }else {
            currentText = this.state.loopedText;
        }
        for (let i = 0; i < childrenLength; i++){
            if (currentText === this.props.children[i].props.children){
                if (i === limit){
                    this.setState({
                        loopedText: this.props.children[0].props.children
                    })
                }else {
                    i++;
                    this.setState({
                        loopedText: this.props.children[i].props.children
                    })
                }
            }
        }
    }

    render() {
        let midTime = (this.props.animateTime/2);
        return (
            <Animated animationIn={this.props.animationIn} animationOut={this.props.animationOut}
                      animationInDuration={midTime}
                      animationOutDuration={midTime}
                      isVisible={this.state.test}>
                <p style={{fontSize: this.props.fontSize}} className={this.props.class} >
                    <span>{this.state.loopedText}</span>
                </p>
            </Animated>
        )
    }
}
export default LoopedText