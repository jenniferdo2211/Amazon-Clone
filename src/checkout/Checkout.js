import React from 'react'
import { useContextValue } from '../context/StateProvider';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ basket }] = useContextValue();

    return (
        <div className="checkout">
            <img className="checkout__ad" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Prime/XCM_Manual_1500x350_1210306_1210306_IN_Prime_Deals_7a028a6d_aba0_4767_9510_e5e013c3a81f_jpg_LOWER_QL85_.jpg" 
                alt="Amazon advertisment"
            />
                
            {basket?.length === 0 ? (
                <div className="checkout__empty">
                    <h2 className="checkout__title">Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to basket" under the item.</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>
            )}
                
            <div className="checkout__main">
                <div className="checkout_left">
                    {basket.map(item => <CheckoutProduct key={item.id} item={item} />)}
                </div>

                <div className="checkout_right">
                    {basket?.length > 0 && <Subtotal />}
                </div>
            </div>
        </div>
    )
}
export default Checkout
