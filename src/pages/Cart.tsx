import '../styles/Cart.css';
import CartList from '../components/CartItems/CartList';
import CartForm from '../components/CartItems/CartForm';

const Cart = () => {
  return (
    <>
      <h1 className='cart__title'>Корзина</h1>
      <div className='cart__content'>
        <div className='cart__left-cart left-cart'>
          <CartList />
        </div>
        <div className='cart__right-cart right-cart'>
          <CartForm />
        </div>
      </div>
    </>
  );
};

export default Cart;
