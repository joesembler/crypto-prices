import React from "react";
import logo from "../images/crypto-call-logo.png"
import igLogo from "../images/ig-logo.png"
import twitterLogo from "../images/twitter-logo.png"

function Header (){
   
    return(
        <div className="Header">
            <img id="cryptoCallLogo" src={logo} alt="crypto call logo"/>
            {/* <h1>The Crypto Call</h1> */}

            <div className="socialMediaLinks">
                <a href="https://www.instagram.com/thecryptocall/" target="_blank"><img id="igLogo" src={igLogo} width="40" height="40" x="20" y="10" href=""></img></a>
                <a href="https://twitter.com/VeThugMemes" target="_blank"><img id="twitterLogo" src={twitterLogo} width="60" height="60" x="80" y="0" href="https://twitter.com/VeThugMemes"></img></a>
            </div>   
            
        </div>
    );
}

export default Header;