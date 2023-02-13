import { useState } from 'react';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import Modal from '../UI/Modal';
import Cart from '../Cart/Cart';

const MainHeader = (props) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const isItemSelected = false;

  return (
    <header className={classes.header}>
      <h1>Hogwarts Books</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={() => { setModalVisibility(true) }} />
            <Modal visibility={modalVisibility} onClose={() => { setModalVisibility(false) }}>
              <Cart isItemSelected={isItemSelected} />
            </Modal>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
