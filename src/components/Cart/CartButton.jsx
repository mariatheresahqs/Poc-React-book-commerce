import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const cartTotalQuantity = useSelector(state => state.cart.totalQuantity)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>My Cart </span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
    </button>
  );
};

export default CartButton;

