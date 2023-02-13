import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { cartActions } from '../../store/cart-slice';
import classes from './ProductItem.module.css';
import Card from '../UI/Card';
// import Modal from '../UI/Modal';
// import Cart from '../Cart/Cart';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  // const [modalVisibility, setModalVisibility] = useState(false);
  // const [isItemSelected, setIsItemSelected] = useState(false);
  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    console.log(props);
    // setModalVisibility(true);
    // setIsItemSelected(true);
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
      description
    }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler} >Add to Cart</button>
          {/* <Modal visibility={modalVisibility} onClose={() => { setModalVisibility(false) }}>
            <Cart isItemSelected={isItemSelected} itemID={id} />
          </Modal> */}
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
