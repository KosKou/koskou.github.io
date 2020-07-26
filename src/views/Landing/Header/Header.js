import React, {Component} from "react";
import NavBar from "./NavBar";
import Mask from "./Mask";

class Header extends Component{
    render() {
        return (
            <>
                <NavBar/>
                <Mask/>
            </>
        )
    }

}

export default Header;