import { FC } from 'react';
import { useAppDispatch } from '../../../../../hooks/hooks';
import { INewProduct } from '../../../../../models/INewProduct';
import { addToCart } from '../../../../../store/reducers/cartItemSlice';

import {
  decrement,
  increment,
} from '../../../../../store/reducers/newProductSlice';
import ProductItem from './ProductItem';

interface IProductList {
  productList: INewProduct[];
}

const ProductList: FC<IProductList> = ({ productList }) => {
  const dispatch = useAppDispatch();
  return (
    <div className='content__products products'>
      {!productList.length ? (
        <h2 className='content__noproducts'>Список пуст</h2>
      ) : (
        productList.map((item) => (
          <ProductItem
            key={item.id}
            {...item}
            increment={() => dispatch(increment(item.id))}
            decrement={() => dispatch(decrement(item.id))}
            addToCart={() => dispatch(addToCart(item))}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
