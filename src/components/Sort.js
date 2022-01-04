import React, {useState, useEffect} from "react";


function Sort(props){
    const [sortType, setSortType] = useState('market_cap');
    const [ascending, setAscending] = useState(true);
    
    useEffect(() => {
        const sortArray = type => {
          const types = {
            name: 'name',
            current_price: 'current_price',
            price_change_24h: 'price_change_24h',
            market_cap: 'market_cap'
          };
          const sortProperty = types[type];
          if(props.coins.length > 0){
            const sorted = [...props.coins].sort((a, b) => {
              if(a[sortProperty] > b[sortProperty]){
                if(ascending){
                  return -1;
                }
                else if(!ascending){
                  return 1;
                }
              }
              else if(a[sortProperty] < b[sortProperty]){
                if(ascending){
                  return 1;
                }
                else if(!ascending){
                  return -1;
                }
              else if(a[sortProperty] === b[sortProperty]){
                return 0;
              }
              }
              
             
          })
            
            props.setDisplayCoins(sorted);
          }
      }
        sortArray(sortType);
      }, [sortType, ascending]);

    return(
        <div className="Sort">
            <label for="selectSort">Sort By: </label>
            
            <select onChange={(e) => setSortType(e.target.value)}>
              <option value="market_cap">Market Cap</option>
              <option value="name">Alphabetical</option>
              <option value="current_price">Price</option>
              <option value="price_change_24h">Percent Change</option>
            </select>
            <button onClick={() => {setAscending(!ascending)}}>{ascending ? "Descending" : "Ascending"}</button>


            <label for="selectCurrency">Select Currency </label>
            <select onChange={(e) => props.onCurrencyChange(e.target.value)}>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="jpy">JPY</option>
            </select>

            <label for="selectDisplay">Display Crypto Per Page </label>
            <select onChange={(e) => props.onPerPageChange(e.target.value)}>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="250">250</option>
            </select>
        </div>
        
    )
}

export default Sort;