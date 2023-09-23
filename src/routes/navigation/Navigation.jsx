import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { LogoContainer, NavLink, NavLinksContainer, NavigationContainer } from './navigation.styles.js';

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen} = useContext(CartContext);
 
    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo"/>
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>
                    { currentUser 
                        ? (
                            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                        ) : (
                            <NavLink className="nav-link" to="/auth">
                                SIGN IN
                            </NavLink>
                        )

                    }
                    <CartIcon/>
                </NavLinksContainer>
                {isCartOpen && 
                    (<CartDropdown/>)
                }
            </NavigationContainer>
            <Outlet/>
        </>
    );
}

export default Navigation;