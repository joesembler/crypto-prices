import React from "react";
import Header from "./Header";
import CryptoContainer from "./CryptoContainer";
import Footer from "./Footer"

function App (){
    return (
        <div className="App">
            <Header />
            <CryptoContainer />
            <Footer />
        </div>
    );
}

export default App;