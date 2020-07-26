import React, {Component} from "react";

class WhatsAppButton extends Component{

    /* Default Props
    * phoneNumber: number
    * popUpMessage: String
    * defaultMessage: String
    * placeHolder: String
    * */
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            defaultUri: "",
            showPopUp: false,
            uriMessage: ""
        }

        this.getDefaultUri =  this.getDefaultUri.bind(this);
        this.handleHide =  this.handleHide.bind(this);
        this.handleHover =  this.handleHover.bind(this);
        this.handleMessage =  this.handleMessage.bind(this);
    }

    componentDidMount() {
        this.getDefaultUri();
    }

    getDefaultUri(){
        let URI = "https://api.whatsapp.com/send?phone=" + this.props.phoneNumber + "&"
                   + "text=";
        this.setState((state, props) => ({
            defaultUri: URI,
            uriMessage: URI + this.props.defaultMessage
        }))
    }
    handleHover(){
        console.log("Primer estado");
        console.log(this.state.showPopUp)
        console.log("Yamete Kudasai");
        if (!this.state.showPopUp){
            this.setState((state) => ({
               showPopUp: true
            }))
        }
    }
    handleHide(){
        this.setState((state) => ({
            showPopUp: !state.showPopUp
        }))
    }
    handleMessage(event) {
        this.setState({
            message: event.target.value,
            uriMessage: this.state.defaultUri + event.target.value
        })
    }

    render() {
        const myFloat = {
            marginTop: "16px"
        }
        const buttonFloat = {
            position: "fixed",
            width:"75px",
            height:"75px",
            bottom:"15px",
            left:"15px",
            backgroundColor:"#25d366",
            color:"#FFF",
            borderRadius:"50px",
            textAlign:"center",
            fontSize:"40px",
            zIndex:50
        }
        return (
            <div >
                {this.state.showPopUp ?
                    <div className="wssp-floating">
                        <div className="wssp-floating-popup active">
                            <div className="wssp-floating-head" onClick={this.handleHide}
                                 style={{backgroundColor: "rgb(18, 140, 126)"}}>
                                <span>WhatsApp Chat</span><strong className="close">×</strong>
                            </div>
                            <div className="wssp-floating-message">{this.props.popUpMessage}</div>
                            <div className="wssp-floating-input-message">
                            <textarea placeholder={this.props.placeHolder} value={this.state.message}
                                      onChange={this.handleMessage}/>
                                <a href={this.state.uriMessage} target="_blank"
                                   rel="noopener noreferrer">
                                    <div className="wssp-floating-btn-send">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"/>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    : <></>}
                <a href={this.state.uriMessage} onMouseEnter={this.handleHover}
                   style={buttonFloat} target="_blank"  rel="noopener noreferrer">
                    <i className="fab fa-whatsapp" style={myFloat}/>
                </a>
            </div>
        )
    }
}

export default WhatsAppButton