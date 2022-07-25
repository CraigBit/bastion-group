import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FC, useState } from 'react';
import { arrayPriceFilter } from '../../../../../../store/reducers/filterSlice';
import arrowUp from '../../../../../../img/main/mainpage/categories/categories-vector.svg';
import marks from '../../../../../../img/main/mainpage/filters/marks.svg';
import { useAppDispatch } from '../../../../../../hooks/hooks';
import { INewProduct } from '../../../../../../models/INewProduct';

interface IProductList {
  productList: INewProduct[];
}

const PriceFilter: FC<IProductList> = ({ productList }) => {
  const [lowestPoint, setLowestPoint] = useState<number>(0);
  const [highestPoint, sethighestPoint] = useState<number>(9999);

  const dispatch = useAppDispatch();

  const handleHighestPoint = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value > 9999) {
      return;
    }
    sethighestPoint(+e.target.value.replace(/\D/, ''));
  };

  const handleLowestPoint = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value > highestPoint) {
      return;
    }
    setLowestPoint(+e.target.value.replace(/\D/, ''));
  };

  const onSliderChange = (val: any, productList: INewProduct[]) => {
    setLowestPoint(val[0]);
    sethighestPoint(val[1]);
    if (productList.length) {
      dispatch(arrayPriceFilter([productList, val]));
    }
  };
  return (
    <div className='filter__block'>
      <div className='filter__price price'>
        <div className='price__title'>
          <div className='price__title-text'>Цена, руб.</div>
          <div className='price__title-icon'>
            <img src={arrowUp} alt='arrow-down' />
          </div>
        </div>
        <div className='price__inputs'>
          <label className='price__input-label'>
            <span className='price__input-text'>от</span>
            <input
              type='text'
              value={lowestPoint}
              onChange={(e) => handleLowestPoint(e)}
              className='price__input-field'
            />
          </label>
          <label className='price__input-label'>
            <span className='price__input-text'>до</span>
            <input
              type='text'
              value={highestPoint}
              onChange={(e) => handleHighestPoint(e)}
              className='price__input-field'
            />
          </label>
        </div>
        <div className='price__slider'>
          <Slider
            range
            pushable={300}
            defaultValue={[lowestPoint, highestPoint]}
            value={[lowestPoint, highestPoint]}
            step={50}
            min={0}
            max={9999}
            onChange={(val) => onSliderChange(val, productList)}
            handleStyle={{
              background: '#C93E33',
              border: '3px solid #FFFFFF',
              opacity: '1',
              boxShadow: 'none',
            }}
            trackStyle={{ background: '#C93E33' }}
            railStyle={{ background: '#E6E6E6' }}
          />
        </div>
        <span className='price__slider-image'>
          <img src={marks} alt='' />
        </span>
      </div>
    </div>
  );
};

export default PriceFilter;
