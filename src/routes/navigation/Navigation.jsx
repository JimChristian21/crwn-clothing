import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss';

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen} = useContext(CartContext);

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    { currentUser 
                        ? (
                            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                        )

                    }
                    <CartIcon/>
                </div>
                {isCartOpen && 
                    (<CartDropdown/>)
                }
            </div>
            <Outlet/>
        </>
    );
}

export default Navigation;