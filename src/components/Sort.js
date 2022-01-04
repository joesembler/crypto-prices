import React, {useState, useEffect} from "react";



function Sort(props){
    const [sortType, setSortType] = useState('name');
    const [ascending, setAscending] = useState(false);
    console.log(props)
    
    useEffect(() => {
        const sortArray = type => {
          const types = {
            name: 'name',
            current_price: 'current_price',
            price_change_24h: 'price_change_24h',
            market_cap: 'market_cap'
          };
          const sortProperty = types[type];
          // console.log(newCoins)
          if(props.coins.length > 0){
            console.log('I was called')
            const sorted = [...props.coins].sort((a, b) => {
              if(a[sortProperty] > b[sortProperty]){
                if(ascending){
                  return -1;
                }
                else{
                  return 1;
                }
              }
              else if(a[sortProperty] < b[sortProperty]){
                if(ascending){
                  return 1;
                }
                else{
                  return -1;
                }
              }
              
              // b[sortProperty] - a[sortProperty])
            })
            
            props.setDisplayCoins(sorted);
          }
          
          }
          
        sortArray(sortType);
      }, [sortType, ascending]);


    // if(coins.length > 0){
    //     const sortedCoins = coins.sort((a, b) => {
    //         if(a.current_price < b.current_price){
    //             return -1;
    //         }   
    //         if(a.current_price > b.current_price){
    //             return 1;
    //         } 
    //         else{
    //             return 0;
    //         }
    //    })
    //    .map((coin) => coin);
    //    console.log(sortedCoins)
    // }
    
    
    // console.log(coins);


  



    return(
        <div className="Sort">
            <label for="Sort By: ">Sort By: </label>
            
            <select onChange={(e) => setSortType(e.target.value)}>
                <option value="name">Alphabetical</option>
                <option value="current_price">Price</option>
                <option value="price_change_24h">Percent Change</option>
                <option value="market_cap">Market Cap</option>
            </select>
            <button onClick={() => {setAscending(!ascending)}}>{ascending ? "Descending" : "Ascending"}</button>
        </div>
        
    )
}

export default Sort;