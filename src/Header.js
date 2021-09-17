import React, { useContext } from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search'
import { Link } from "react-router-dom"
import "./Header.css"
import CartContext from './context/CartContext';

export default function Header() {
    const { cart } = useContext(CartContext)
    return (
        <div className="header">
            <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <Link to="/checkout" className="header_link">
                    <div className="header_option"></div>
                    <span className="header_optionLineOne">
                        Hello: Guest or User
                    </span>
                    <span className="header_optionLineTwo">Sign Out : Sign In</span>
                </Link>
            </div>

            <div className="header_optionBasket">
                <Link to="/cart">
                    <div className="header_optionBasket">
                
            <ShoppingBasketIcon />
            <span className="headr_optionLineTwo header_basketCount">{cart?.length}</span>
            </div>
            </Link>
            </div>

            
        </div>
    )
}
