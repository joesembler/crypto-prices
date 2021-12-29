import React from "react";
import CryptoCoin from "./CryptoCoin";

function CryptoList({coins}){
    const cryptoElements = coins.map((coin) => <CryptoCoin key={coin.id} coin={coin} />);
    console.log(coins);
    return (
        <div className="crypto-list">
            {cryptoElements};
        </div>
    )
}

export default CryptoList;