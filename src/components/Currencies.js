import React from 'react'
import "./Currency.css"
    const Currencies = ({ currencies }) => {
      return (
        <div>
          <center><h1>Currencies List</h1></center>
          {currencies.map((code) => (
            <div className="currency">
             <span>{code.currency}</span>
             <br></br>
             <span>PROFIT:-{code.profit}</span>
             <br></br>
             <div className="currency"><span>Buying price:-{code.buyingPrice.price} Buy Time:-{code.buyingPrice.time.hour}:{code.buyingPrice.time.minute}</span></div>
             <div className="currency"><span>Selling price:-{code.sellPrice.price} Sell Time:-{code.sellPrice.time.hour}:{code.sellPrice.time.minute}</span></div>
            </div>
          ))}
        </div>
      )
    };

    export default Currencies