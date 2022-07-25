import { FC, useRef } from 'react';

interface ITypeItem {
  type: string;
  filter: (typeText: string) => void;
}

const TypeItem: FC<ITypeItem> = ({ type, filter }) => {
  const typeValue: any = useRef();
  const handleFilterClick = (itemType: string) => {
    let result = typeValue.current.textContent;
    if (result === itemType) {
      return filter(result);
    }
  };
  return (
    <div className='filter__closed closed'>
      <div className='closed__type-title'>
        <div onClick={() => handleFilterClick(type)} ref={typeValue}>
          {type}
        </div>
      </div>
    </div>
  );
};

export default TypeItem;
