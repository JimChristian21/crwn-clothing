import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
            {cartItems.map(item => (<CartItem cartItem={item}/>))}
            </div>
            <Button >
                CHECKOUT
            </Button>
        </div>
    );
}

export default CartDropdown;