import React, {useState, useEffect} from "react";
import CryptoList from "./CryptoList";

function Search ({coins, onSearch}){
    const [querey, quereySetter] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(querey)).map(coin => coin)
        setResults(filteredCoins);
        console.log(results);
    }, [querey])
  
    

    return (
        <div className="Search">
        <input
            type="text"
            placeholder="Search for a crypto!"
            value={querey}
            onChange={(e) => quereySetter(e.target.value)}
            onSubmit={(e) => {
                e.preventDefault();
                onSearch(results);
            }}
        />
        <CryptoList coins={results} />
        </div>
    );
}

export default Search;