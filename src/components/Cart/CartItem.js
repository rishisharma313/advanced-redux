import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import {cartActions} from '../../store/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const item = props.item;
  const addItemtoCartHandler = () =>{
    dispatch(cartActions.addItemToCart(item));
  }
  const removeItemFromCartHandler = () =>{
    dispatch(cartActions.removeItemFromCart(item));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>
          ${item.totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${item.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCartHandler}>-</button>
          <button onClick={addItemtoCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
