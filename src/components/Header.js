import './Header.css'
import {Link, NavLink} from "react-router-dom";
import Logo from '../assets/logo.png'
import {UseCart} from "../context/CartContext";

export const Header = () => {

    const {cartList} = UseCart()

    return (
        <header>
            <Link to={'/'} className={'logo'}>
                <img src={Logo} alt="Shop Mate Logo"/>
                <span>Shopping Cart</span>
            </Link>
            <nav className={'navigation'}>
                <NavLink to={'/'} className={'link'} end>Home</NavLink>
                <NavLink to={'cart/'} className={'link'}>Cart</NavLink>
            </nav>
            <Link to={'cart/'} className={'items'}>
                <span>Cart : {cartList.length}</span>
            </Link>
        </header>
    );
};