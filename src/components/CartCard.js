import './CartCard.css'
import {UseCart} from "../context/CartContext";

export const CartCard = ({product}) => {
    const {removeFromCart} = UseCart()

    const {name, price, image} = product
    return (
        <div className={'cartCard'}>
            <img src={image} alt={image}/>
            <p className={'productName'}>{name}</p>
            <p className={'productPrice'}>{price} $</p>
            <button onClick={() => removeFromCart(product)}>Remove</button>
        </div>
    );
};