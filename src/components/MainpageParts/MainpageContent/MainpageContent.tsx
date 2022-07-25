import ProductList from './RightPart/Products/ProductList';
import StandardList from './RightPart/Standards/StandardList';
import Catalog from './LeftPart/Catalog';
import Filters from './LeftPart/Filters/Filters';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { useEffect, useState } from 'react';
import {
  arrayStandardFilter,
  arrayConcat,
  arrayTypeFilter,
} from '../../../store/reducers/filterSlice';
import { INewProduct } from '../../../models/INewProduct';

const MainpageContent = () => {
  const productList = useAppSelector(
    (state) => state.newProductSlice.newProduct
  );
  const filteredArray = useAppSelector(
    (state) => state.filterSlice.filteredArray
  );
  const dispatch = useAppDispatch();
  const [filteredProducts, setFilteredProducts] = useState(productList);

  useEffect(() => {
    setFilteredProducts(filteredArray);
    if (filteredArray.length === 0) {
      setFilteredProducts(productList);
    }
  }, [filteredArray, productList]);

  const filterByType = (typeText: string) => {
    dispatch(arrayTypeFilter([productList, typeText]));
  };

  const filterByStandard = (standardText: string) => {
    const filterCondition = productList.filter(
      (item) => item.standard === standardText
    );

    if (
      filteredArray.some(
        (item: INewProduct) => item.standard === standardText
      ) === false
    ) {
      dispatch(arrayConcat(filterCondition));
    } else if (
      filteredArray.some(
        (item: INewProduct) => item.standard === standardText
      ) === true
    ) {
      dispatch(arrayStandardFilter(standardText));
    }
  };
  return (
    <>
      <div className='mainpage__content content'>
        <div className='content__left'>
          <Catalog />
          <Filters productList={productList} filter={filterByType} />
        </div>
        <div className='content__right'>
          <StandardList productList={productList} filter={filterByStandard} />
          <ProductList productList={filteredProducts} />
        </div>
      </div>
    </>
  );
};

export default MainpageContent;
