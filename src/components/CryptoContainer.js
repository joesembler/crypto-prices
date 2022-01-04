import React, {useState, useEffect} from "react";
import Search from "./Search";
import CryptoList from "./CryptoList";
import Sort from "./Sort"

function CryptoContainer (){
  const [coins, setCoins] = useState([]);
  const [displayCoins, setDisplayCoins] = useState([]);
  const [currency, setCurrency] = useState("usd");
  const [perPage, setPerPage] = useState("25");
    
  useEffect(() => {
    console.log('I was called')
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=1&sparkline=falsekets`)
      .then(r => r.json())
      .then(data => {
        setCoins(data);
        setDisplayCoins(data);
      })
  }, [currency, perPage])

  function onSearch(results){
    setDisplayCoins(results);
  }

  function onCurrencyChange(currency){
    setCurrency(currency);
  }

  function onPerPageChange(perPage){
    setPerPage(perPage);
  }
 

  if(coins.length === 0){
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
        <Sort coins={displayCoins.length > 0 ? displayCoins : coins} setDisplayCoins={onSearch} onCurrencyChange={onCurrencyChange} onPerPageChange={onPerPageChange}/>
        <CryptoList coins={displayCoins.length > 0 ? displayCoins : coins} currency={currency}/>
      </div>
    );
  }
 
}

export default CryptoContainer;