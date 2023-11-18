import React, {Component} from "react";
// Bootstrap 4
import '../../../assets/css/bootstrap.min.css';
// Material Design Bootstrap
import '../../../assets/css/mdb.min.css';
// Custom Styles
import '../../../assets/css/style.css';
//What's App Button
import '../../../assets/css/wssp-floating.min.css';
//Animated Css
import '../../../assets/css/animate.min.css';

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import WhatsAppButton from "../../../components/WhatsApp/WhatsAppButton";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasMessage: false
        }
    }

    render() {
        return (
            <>
                <Header/>
                <Main/>
                <WhatsAppButton
                phoneNumber={51994486755}
                popUpMessage={"Hey There, how can i help u?"}
                defaultMessage={"I want more information"}
                placeHolder={"Message me"}/>
                <Footer/>
            </>
        );
    }

}

export default Home
