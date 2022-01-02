import React, {useState, useEffect} from "react";
import Search from "./Search";
import CryptoList from "./CryptoList";
import Sort from "./Sort"

function CryptoContainer (){
  const [coins, setCoins] = useState([]);
  const [displayCoins, setDisplayCoins] = useState([]);
    
  useEffect(() => {
    console.log('I was called')
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=falsekets`)
      .then(r => r.json())
      .then(data => {
        setCoins(data);
      })
  }, [])



  function onSearch(results){
    setDisplayCoins(results);
  }

  // const loading = setInterval(() => {
  //   return (
  //     <div className="loading">
  //       <h2>
  //         Loading... 
  //       </h2>
  //     </div>
  //   )
  // }, 1500)

  if(coins.length == 0){
    // return {loading};
    return (
      <div className="loading">
        <h2>
          Loading... 
        </h2>
      </div>
    )
  }
  else{
    return (
      <div className="CryptoContainer">
        <Search coins={coins} onSearch={onSearch} />
        <Sort coins={displayCoins.length > 0 ? displayCoins : coins} />
        <CryptoList coins={displayCoins.length > 0 ? displayCoins : coins} />
      </div>
    );
  }
 
}

export default CryptoContainer;