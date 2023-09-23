import { useContext } from 'react';
import Button, {BUTTON_TYPE_CLASSES} from '../button/Button';
import './product-card.styles.scss';
import { CartContext } from '../../context/CartContext';

const ProductCard = ({ product }) => {

    const { name, price, imageUrl} = product;
    const { cartItems, addItemToCart } = useContext(CartContext);

    const addToCartHandler = () => {

        addItemToCart(product);
    }

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="cost">{price}</span>
            </div>
            <Button 
                buttonType={BUTTON_TYPE_CLASSES.inverted} 
                onClick={addToCartHandler}
            >
                Add to cart
            </Button>
        </div>
    );
}

export default ProductCard;