import { FC } from 'react';
import { INewProduct } from '../../../../../../../models/INewProduct';
import TypeItem from './TypeItem';
import arrowDown from '../../../../../../../img/main/mainpage/filters/filter-arrow-down.svg';

interface ITypeList {
  productList: INewProduct[];
  filter: (typeText: string) => void;
}

const TypeFilter: FC<ITypeList> = ({ productList, filter }) => {
  const typeArray = productList.map((item) => item.type);
  const filteredtypeArray = typeArray.filter(
    (item, index) => typeArray.indexOf(item) === index
  );
  return (
    <>
      <div className='filter__block'>
        <div className='filter__closed closed'>
          <div className='closed__title'>
            <div className='closed__filter'>Тип продукта</div>
            <div className='closed__icon'>
              <img src={arrowDown} alt='arrow-down' />
            </div>
          </div>
        </div>
      </div>
      {filteredtypeArray.length
        ? filteredtypeArray.map((type, index) => {
            return (
              <div className='filter__block'>
                <TypeItem key={index} type={type} filter={filter} />
              </div>
            );
          })
        : null}
    </>
  );
};

export default TypeFilter;
