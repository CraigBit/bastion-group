import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { resetCart } from '../../store/reducers/cartItemSlice';
import { increment, decrement } from '../../store/reducers/newProductSlice';
import CartItem from './CartItem';

const CartList = () => {
  const cartItemList = useAppSelector((state) => state.cartItemSlice.cartItem);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className='left-cart__warning warning'>
        <div className='warning__text'>
          Извините, но указанное ранее количество товара недоступно. Установлено
          ближайшее доступное значение.
        </div>
      </div>
      <div className='left-cart__list list'>
        {!cartItemList.length ? (
          <h2 className='list__noitem-cart'>Корзина пуста</h2>
        ) : (
          cartItemList.map((item) => {
            return (
              <CartItem
                key={item.id * 2}
                {...item}
                increment={() => dispatch(increment(item.id))}
                decrement={() => dispatch(decrement(item.id))}
              />
            );
          })
        )}
      </div>
      <div className='list__clear clear'>
        <div
          className='clear__cart-clear'
          onClick={() => dispatch(resetCart())}>
          Очистить корзину
        </div>
      </div>
    </>
  );
};

export default CartList;
