import React from 'react';
import { useContextValue } from '../context/StateProvider';
import "./Subtotal.css";

function Subtotal() {
    const [{basket}] = useContextValue();
    const subtotal = basket.reduce((subtotal, item) => subtotal += item.price, 0)

    return (
        <div className="subtotal">
            <div>
                {/* <h2>Subtotal: </h2> */}
                <p>
                    Subtotal ({basket?.length} {basket?.length > 1? "items" : "item"}): 
                    <small>&nbsp;$</small>
                    <strong>{subtotal}</strong>
                </p>
            </div>

            <div>
                <input type="checkbox" name="containsGift" />
                <label>&nbsp;This order contains a gift</label>
            </div>
            
            <button className="subtotal__checoutButton">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;