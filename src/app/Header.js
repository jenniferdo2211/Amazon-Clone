import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useContextValue } from "../context/StateProvider";
import { auth } from '../login/firebase';

function Header() {
    const [{ basket, user }] = useContextValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return <nav className="header">
        <Link to="/">
            <img className="header__logo" 
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt="amazon-logo" />
        </Link>``
        
        <div className="header__search">
            <input text="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
            <Link to={!user && "/login"} className="header__link">
                <div className="header__option" onClick={login}>
                    <span className="header__optionLineOne">Hello {user?.email}</span>
                    <span className="header__optionLineTwo">{!user? "Sign In" : "Sign Out"}</span>
                </div>
            </Link>

            <Link to="/orders" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>

            <Link to="/prime" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>
        </div>

        <Link to="/checkout"  className="header__link">
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">{ basket.length }</span>
            </div>
        </Link>

    </nav>;
}

export default Header;




