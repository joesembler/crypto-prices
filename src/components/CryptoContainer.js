import React, {useState, useEffect} from "react";
import Search from "./Search";
import CryptoList from "./CryptoList";

function CryptoContainer (){
  const [coins, setCoins] = useState([]);
  const [displayCoins, setDisplayCoins] = useState([]);
    
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=falsekets`)
      .then(r => r.json())
      .then(data => {
        setCoins(data);
      })
  }, [])

  console.log(coins);

  function onSearch(results){
    console.log("I was called")
    setDisplayCoins([results]);
    console.log(displayCoins);
  }

  return (
    <div>
      <Search coins={coins} onSearch={onSearch} />
      {/* <CryptoList coins={displayCoins} /> */}
    </div>
  );
}

export default CryptoContainer;