import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);

  const listAllItems = cartItems.map(item =>
    <CartItem key={item.id.toString()}
      item={{
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        total: item.totalPrice,
        price: item.price
      }}
    />
  );

  const findItem = () => {
    return cartItems.find(item => {
      return item.id === props.itemID
    })
  };

  const itemSelected = () => {
    const item = findItem();
    return (
      <CartItem key={item.id.toString()}
        item={{
          id: item.id,
          title: item.name,
          quantity: item.quantity,
          total: item.totalPrice,
          price: item.price
        }}
      />
    );
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {props.isItemSelected ? itemSelected() : listAllItems}
      </ul>
    </Card>
  );
};

export default Cart;
