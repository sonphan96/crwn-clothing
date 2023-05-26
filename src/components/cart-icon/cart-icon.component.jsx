// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// import { CartContext } from "../../contexts/cart.context";
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer>
      <ShoppingIcon onClick={toggleIsCartOpen} />
      <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
