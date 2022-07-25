import { FC } from 'react';
import { IProductItem } from '../../../../../models/IProductItem';
import { formatPrice } from '../../../../../utilities/formatPrice';

const ProductItem: FC<IProductItem> = ({
  name,
  price,
  standard,
  photo,
  quantity,
  increment,
  decrement,
  addToCart,
}) => {
  return (
    <>
      <div className='products__wrapper'>
        <div className='products__item'>
          <div className='products__upper-block'>
            <div className='products__header-line'>
              <div className='products__promo promo'>
                {name.toLowerCase().includes('о') ? (
                  <div className='promo__hit'>ХИТ</div>
                ) : null}
                {name.toLowerCase().includes('а') ? (
                  <div className='promo__sale'>АКЦИЯ</div>
                ) : null}
              </div>
              <div className='products__to-favorite'>В избранное</div>
            </div>
            <div className='products__image-place _ibg'>
              <img src={photo} alt='picture' width='216px' height='200px' />
            </div>
          </div>
          <div className='products__lower-block'>
            <span className='products__standard'>{standard}</span>
            <div className='products__item-name'>{name}</div>
            <div className='products__price-counter'>
              <div className='products__item-price'>
                {formatPrice(price)} руб.
              </div>
              <div className='products__total-number total-number'>
                <div className='total-number__increase' onClick={increment}>
                  +
                </div>
                <div className='total-number__digit'>{quantity}</div>
                <div className='total-number__decrease' onClick={decrement}>
                  -
                </div>
              </div>
            </div>
          </div>
          <div className='products__popup-buttons'>
            <button className='products__to-cart' onClick={addToCart}>
              В корзину
            </button>
            <button className='products__details'>Подробнее</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
