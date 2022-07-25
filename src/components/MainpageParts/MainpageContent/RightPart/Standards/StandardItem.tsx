import { toggleClass } from '../../../../../store/reducers/newProductSlice';
import { FC, useRef } from 'react';
import { useAppDispatch } from '../../../../../hooks/hooks';

interface IStandardItem {
  isActive: boolean;
  key: number;
  standard: string;
  filter: (standardText: string) => void;
}

const StandardItem: FC<IStandardItem> = ({ standard, filter, isActive }) => {
  const standardValue: any = useRef();
  const dispatch = useAppDispatch();

  const handleClick = (itemStandard: string) => {
    let result = standardValue.current.textContent;
    if (itemStandard === result) {
      dispatch(toggleClass(result));
    }
    return filter(result);
  };
  return (
    <>
      <div
        onClick={() => handleClick(standard)}
        className={isActive ? 'standards__item-active' : 'standards__item'}
        ref={standardValue}>
        {standard}
      </div>
    </>
  );
};

export default StandardItem;
