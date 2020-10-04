import React from '../../node_modules/react';
import "./Product.css";
import ShoppingBasketIcon from '../../node_modules/@material-ui/icons/ShoppingBasket';
import { useContextValue } from "../context/StateProvider";

function Product(props) {
    const { title, image, price, rating } = props;

    const [, dispatch ] = useContextValue(); 
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: { ...props }
        })
    };

    return (
        <div className="product">
            <img className="product__img" src={ image } alt={title} />

            <div className="product__info">
                <p>{ title }</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{ price }</strong>
                </p>
                <div className="product_rating">
                    { Array(rating).fill().map((_, i) => <span key={i} role="img" aria-label="star">⭐</span>) }
                </div>
            </div>
            
            <button className="product__shoppingBasketButton"
                onClick={ addToBasket }>
            <ShoppingBasketIcon />
            </button>
        </div>
    )
}

export default Product
