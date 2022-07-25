import { FC } from 'react';
import { INewProduct } from '../../../../../models/INewProduct';
import StandardItem from './StandardItem';

interface IProductList {
  productList: INewProduct[];
  filter: (standardText: string) => void;
}

const StandardList: FC<IProductList> = ({ productList, filter }) => {
  const standardArray = productList.map((item) => ({
    isActive: item.isActive,
    standard: item.standard,
  }));
  const table: any = {};
  const filteredStandardArray = standardArray.filter(
    ({ standard }) => !table[standard] && (table[standard] = 1)
  );
  return (
    <div className='content__standards standards'>
      {filteredStandardArray.map((item, index) => {
        return (
          <StandardItem
            key={index}
            standard={item.standard}
            isActive={item.isActive}
            filter={filter}
          />
        );
      })}
    </div>
  );
};

export default StandardList;
