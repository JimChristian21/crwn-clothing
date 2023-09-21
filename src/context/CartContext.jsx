import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, product) => {

    const existCartItem = cartItems.find(item => {

        return item.id === product.id
    });

    if (existCartItem) { 

        return cartItems.map(item => {

            if (item.id === product.id) {

                item.quantity++;
            }

            return item;
        });
    }

    return [
        ...cartItems,
        {
            ...product,
            quantity: 1
        }
    ];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {

        const newCartCount = cartItems.reduce((total, item) => {
            return total + item.quantity
        }, 0);

        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = (product) => {

        setCartItems(addCartItem(cartItems, product));
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}