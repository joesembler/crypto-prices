import React from "react";

function CryptoCoin({coin}){

    function currencyFormat(num) {
        if(num < .1){
            return '$' + num.toFixed(5);
        }
        else if(num == null){
            return null;
        }
        // else if(num > 1000){
        //     const thousandsPlace = Math.round(num/1000);
        //     console.log(thousandsPlace)
        //     return ('$' + thousandsPlace + ',' + (num.toFixed(2) - (thousandsPlace*1000)))
        // }
        else{
            return '$' + num.toFixed(2);
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
        if(num > 1000000000000){
            const newNum = num /1000000000000;
            return ('$' + newNum.toFixed(1) + "  trillion");
        }
        else if(num > 1000000000){
            const newNum = num / 1000000000
            return ('$' + newNum.toFixed(1) + "  billion");
        }
        else if(num > 1000000){
            const newNum = num / 1000000;
            return ('$' + newNum.toFixed(1) + "  million");
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
        
    return (
        <div className="CryptoCoin">
            <svg height="150" width="500">
            
                <rect width="1080" height="1080" fill="#ffff59" />
                <image href={coin.image} width="100" height="100" x="28" y="15"/>
                {/* <circle fill="#FEE585" cx="30" cy="30" r="30"/> */}
                <text fill="black" fontSize="30" fontFamily="Marker Felt" x="4" y="37">#{coin.market_cap_rank}</text>
                <text fill="white" fontSize="30" fontFamily="Marker Felt" x="2" y="35">#{coin.market_cap_rank}</text>
                
                <text fill="black" opacity="0.95" fontSize="50" fontFamily="Marker Felt" x="150" y="60">{coin.name}</text>
                <text fill="#black"  fontSize="25" fontFamily="Sans-serif" fontWeight="500" x="365" y="90">{currencyFormat(coin.current_price)}</text>
                <text fill={coin.price_change_percentage_24h > 0 ? "green" : "red"}  fontSize="25" fontFamily="Sans-serif" fontWeight="500" x="365" y="130">{percentageFormat(coin.price_change_percentage_24h)}</text>
                <text fill="#black"  fontSize="16" fontFamily="Sans-serif" fontWeight="500" x="150" y="100">Market Cap: {marketCapFormat(coin.market_cap)}</text>

                <text fill="#black"  fontSize="16" fontFamily="Sans-serif" fontWeight="500" x="150" y="130">Data as of {formatLastUpdated(coin.last_updated)} minute{formatLastUpdated(coin.last_updated) !== 1 ? 's' : ''} ago</text>

            </svg>
            {/* <button>Watch</button> */}
        </div>
    )
}

export default CryptoCoin;