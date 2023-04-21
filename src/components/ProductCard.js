import './ProductCard.css'
import {UseCart} from "../context/CartContext";
import {useEffect, useState} from "react";

export const ProductCard = ({product}) => {
    const {cartList, addToCart, removeFromCart} = UseCart()
    const [isInCart, setIsInCart] = useState(false)

    // function handleAdd() {
    //     addToCart(product)
    //     console.log(cartList)
    // }


    const {id, name, price, image} = product

    useEffect(() => {
        const productIsInCart = cartList.find(cartItem => cartItem.id === id);
        if (productIsInCart) {
            setIsInCart(true)
        } else {
            setIsInCart(false)
        }
    }, [cartList, id])
    return (
        <div className={'productCard'}>
            <img src={image} alt={image}/>
            <p className={'name'}>{name}</p>
            <div className={'action'}>
                <p>{price} $</p>

                {isInCart ? (<button className={'remove'} onClick={() => removeFromCart(product)}>Remove</button>) : (
                    <button onClick={() => addToCart(product)}>Add to Cart</button>)}

            </div>

        </div>
    );
};