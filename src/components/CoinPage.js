import React, { useEffect, useState } from "react";
import {  useParams } from 'react-router-dom';

function CoinPage(){
    const params= useParams();
    const [coin, setCoin] = useState({});

    

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${params.id}`)
            .then(r=>r.json())
            .then(data=> {
                setCoin(data);
                console.log(data)
            })
    }, [params]);


    let symbol="$";
   

    function currencyFormat(num) {
        if(num < .1){
            return symbol + num.toFixed(5);
        }
        else if(num == null){
            return null;
        }
        else{
            return symbol + num.toFixed(2);
        }
    }

    function percentageFormat(num){
        if(num > 0){
            return '+' + num.toFixed(2) + '%';
        }
        else if(num == null){
            return null; 
        }
        else{
            return num.toFixed(2) + '%';
        }
    }

    function marketCapFormat(num){
        console.log(num)
        if(num > 1000000000000){
            const newNum = num /1000000000000;
            return (symbol + newNum.toFixed(1) + "  trillion");
        }
        else if(num > 1000000000){
            const newNum = num / 1000000000
            return (symbol + newNum.toFixed(1) + "  billion");
        }
        else if(num > 1000000){
            const newNum = num / 1000000;
            return (symbol + newNum.toFixed(1) + "  million");
        }
    }

    function formatLastUpdated(date){
        let lastUpdatedMill = Date.parse(date);
        let now = new Date();
        now = Date.parse(now);

        lastUpdatedMill = now - lastUpdatedMill;

        const lastUpdatedMin = lastUpdatedMill / 1000 / 60;
        return Math.round(lastUpdatedMin);
    }
        
    if (coin.image != null){
            return(
                <div className="CoinPage">
                    {/* <svg height="150" width="500">
                    
                        <rect width="1080" height="1080" fill="#ffff59" />
                        <image href={coin.image.large} width="100" height="100" x="28" y="15"/>
                        
                        <text fill="black" fontSize="30" fontFamily="Marker Felt" x="4" y="37">#{coin.market_cap_rank}</text>
                        <text fill="white" fontSize="30" fontFamily="Marker Felt" x="2" y="35">#{coin.market_cap_rank}</text>
                        
                        <text fill="black" opacity="0.95" fontSize="50" fontFamily="Marker Felt" x="150" y="60">{coin.name}</text>
                        
                        <text fill={coin.price_change_percentage_24h > 0 ? "green" : "red"}  fontSize="25" fontFamily="Sans-serif" fontWeight="500" x="365" y="130">{percentageFormat(coin.price_change_percentage_24h)}</text>
                        

                        

                    </svg>   */}
                    
                    <a target="_blank"id="CoinPageImageLink" href={coin.links.homepage[0]}>
                        <img id="CoinPageImage" src={coin.image.large} ></img>
                    </a>  
                    
                    <div className="CoinPageHeaders">

                        <h1>{coin.name}</h1>
                        <h2>{currencyFormat(coin.market_data.current_price.usd)}</h2>
                        <h2>{percentageFormat(coin.market_data.market_cap_change_percentage_24h)}</h2>
                        <h4 id="CoinPageMarketCapRank">Market Cap Rank: #{coin.market_data.market_cap_rank}</h4>
                        <h4 id="CoinPageMarketCap">Market Cap: {marketCapFormat(coin.market_data.market_cap.usd)}</h4>


                        
                        


                    </div>

                    
                           
                    <p className="description">
                        {coin.description.en}
                    </p>  

                    

                    
                   
                    
                </div>
            )
        }
    else{
        return (<div className="emptyCryptoPage">{null}</div>)
    }
        
    
}

export default CoinPage;