import React from "react";
import CryptoCoin from "./CryptoCoin";

function CryptoList({coins, currency}){
    const cryptoElements = coins.map((coin) => <CryptoCoin key={coin.id} coin={coin} currency={currency}/>);
    return (
        <div className="crypto-list">
            {cryptoElements};
        </div>
    )
}

export default CryptoList;