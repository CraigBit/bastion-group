import { FC } from 'react';
import { useAppDispatch } from '../../../../../hooks/hooks';
import { INewProduct } from '../../../../../models/INewProduct';
import { resetFilters } from '../../../../../store/reducers/filterSlice';
import OtherFilters from './FiltersParts/OtherFilters';
import TypeFilter from './FiltersParts/TypeFilter/TypeFilters';
import PriceFilter from './FiltersParts/PriceFilter';

interface IProductList {
  productList: INewProduct[];
  filter: (typeText: string) => void;
}

const Filters: FC<IProductList> = ({ productList, filter }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className='content__filter filter'>
        <div className='filter__block'>
          <div className='filter__title'>Фильтры</div>
        </div>
        <PriceFilter productList={productList} />
        <TypeFilter productList={productList} filter={filter} />
        <OtherFilters />
        <div className='filter__reset-block'>
          <button
            className='filter__reset'
            onClick={() => dispatch(resetFilters())}>
            Сбросить фильтры
          </button>
        </div>
      </div>
    </>
  );
};

export default Filters;
