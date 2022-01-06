import React, {useState, useEffect} from 'react';
import CryptoList from './CryptoList';

function WatchList(props) {
    const [watchedCoins, setWatchedCoins] = useState([]);
    const [updatedWatchList, setUpdatedWatchList] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/watchList")
        .then(r=>r.json())
        .then(data=> {
           setWatchedCoins(data) 
        })
    }, [])
    
    useEffect(()=>{
        let newArray = [];
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.currency}&order=market_cap_desc&per_page=250&page=1&sparkline=falsekets`)
            .then(r=>r.json())
            .then(data=> {
                data.forEach(coin=>{
                    watchedCoins.forEach((watchedCoin) => { 
                        if(coin.id === watchedCoin.id){
                            newArray.push(coin);            
                        }
                    })
                })
                setUpdatedWatchList(newArray)
            }) 
    }, [watchedCoins.length > 0])


    return(
        <div className="WatchList">
            {updatedWatchList.length > 0 ? <CryptoList coins={updatedWatchList} currency={props.currency} /> : <h2>Loading...</h2>}
        </div>
    )
}

export default WatchList;