import React from "react";
import CryptoCoin from "./CryptoCoin";

function CryptoList(props){
    const cryptoElements = props.coins.map((coin) => <CryptoCoin key={coin.id} coin={coin} currency={props.currency} handleClick={props.handleClick}/>);
    return (
        <div className="crypto-list">
            {cryptoElements};
        </div>
    )
}

export default CryptoList;