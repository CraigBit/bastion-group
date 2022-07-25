import { FC } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import trash from '../../img/cart/trash-icon.svg';
import { deleteCartItem } from '../../store/reducers/cartItemSlice';
import { formatPrice, formatTotalPrice } from '../../utilities/formatPrice';

interface CartProps {
  id: number;
  photo: any;
  standard: string;
  name: string;
  price: string;
  quantity: number;
  increment: () => void;
  decrement: () => void;
}

const CartItem: FC<CartProps> = ({
  id,
  photo,
  standard,
  name,
  price,
  quantity,
  increment,
  decrement,
}) => {
  const formattedPrice = formatPrice(price);
  const totalPrice = formatTotalPrice(price, quantity);

  const dispatch = useAppDispatch();
  return (
    <div className='list__item-cart item-cart'>
      <div className='item-cart__image'>
        <div className='item-cart__image-block _ibg'>
          <img src={photo} alt='part' width='120px' height='115px' />
        </div>
        <div className='item-cart__information'>
          <div className='item-cart__standard'>{standard}</div>
          <div className='item-cart__name'>{name}</div>
          <div className='item-cart__price'>{formattedPrice} руб.</div>
        </div>
      </div>
      <div className='item-cart__total'>
        <div className='item-cart__total-number number'>
          <div className='number__increase' onClick={increment}>
            +
          </div>
          <div className='number__digit'>{quantity}</div>
          <div className='number__decrease' onClick={decrement}>
            -
          </div>
        </div>
        <div className='item-cart__total-price'>{totalPrice} руб.</div>
        <div
          className='item-cart__delete-icon'
          onClick={() => dispatch(deleteCartItem(id))}>
          <img src={trash} alt='' />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
