import React, {useState, useEffect} from "react";
import Dropdown from 'react-bootstrap/Dropdown'


function Sort(coins){
    // const sortedCoins = coins
    // // .sort((a, b) => coinA.current_price > coinB.current_price ? 1 : -1)
    // .sort(function (a, b) {
    //     return a.current_price - b.current_price;
    // });

    // console.log(sortedCoins);

    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

  



    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu id="dropdown-menu" >
                <Dropdown.Item className="dropdown-item">Action</Dropdown.Item>
                <Dropdown.Item className="dropdown-item">Another action</Dropdown.Item>
                <Dropdown.Item className="dropdown-item">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Sort;