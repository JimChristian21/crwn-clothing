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

const removeCartItem = (cartItems, product) => {

    const existCartItem = cartItems.find(item => {

        return item.id === product.id
    });

    if (existCartItem.quantity === 1) { 

        return cartItems.filter(cartItem => cartItem.id !== existCartItem.id);
    }

    return cartItems.map((cartItem) => {

        return (cartItem.id === existCartItem.id)
            ? { ...cartItem, quantity: cartItem.quantity - 1}
                : cartItem;
    });
}

const clearCartItem = (cartItems, product) => {

    return cartItems.filter(cartItem => cartItem.id !== product.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {

        const newCartCount = cartItems.reduce((total, item) => {
            return total + item.quantity
        }, 0);

        setCartCount(newCartCount);
        
    }, [cartItems]);

    useEffect(() => {

        const newCartTotal = cartItems.reduce((total, cartItem) => {

            return total + (cartItem.price * cartItem.quantity);
        }, 0);

        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (product) => {

        setCartItems(addCartItem(cartItems, product));
    }

    const removeItemFromCart = (product) => {

        setCartItems(removeCartItem(cartItems, product));
    }

    const clearItemFromCart = (product) => {

        setCartItems(clearCartItem(cartItems, product));
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartCount,
        cartTotal
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}