import React from 'react';
import "./CheckoutProduct.css";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useContextValue } from "../context/StateProvider";

function CheckoutProduct(props) {
    const {item: {title, image, price, rating}} = props;

    const [, dispatch ] = useContextValue(); 
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            itemId: props.item.id
        })
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__img" src={ image } alt={title} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{ title }</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{ price }</strong>
                </p>
                <div className="checkoutProduct_rating">
                    { Array(rating).fill().map((_, i) => <span key={i} role="img" aria-label="star">⭐</span>) }
                </div>

                <button className="checkoutProduct__deleteIcon"
                    onClick={ removeFromBasket }>
                    <DeleteForeverIcon />
                </button>
            </div>            
        </div>
    )
}

export default CheckoutProduct