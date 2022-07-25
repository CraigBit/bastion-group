import { useState } from 'react';

import arrowDown from '../../../../../../img/main/mainpage/filters/filter-arrow-down.svg';

const OtherFilters = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isChecked2, setIsChecked2] = useState<boolean>(true);
  return (
    <>
      <div className='filter__block'>
        <div className='filter__closed closed'>
          <div className='closed__title'>
            <div className='closed__filter'>Бренд</div>
            <div className='closed__icon'>
              <img src={arrowDown} alt='arrow-down' />
            </div>
          </div>
        </div>
      </div>
      <div className='filter__block'>
        <div className='filter__customer-choice'>
          <div className='filter__checkbox checkbox'>
            <label className='checkbox__container'>
              <input
                type='checkbox'
                onChange={() => setIsChecked(!isChecked)}
              />
              <span className='checkmark' aria-hidden='true'>
                <div className={`inactive ${isChecked ? 'active' : ''}`}></div>
              </span>
            </label>
          </div>
          <div className='filter__choice-text'>Выбор покупателей</div>
        </div>
      </div>
      <div className='filter__block-last'>
        <div className='filter__best-price'>
          <div className='filter__checkbox checkbox'>
            <label className='checkbox__container'>
              <input
                type='checkbox'
                onChange={() => setIsChecked2(!isChecked2)}
              />
              <span className='checkmark' aria-hidden='true'>
                <div className={`inactive ${isChecked2 ? 'active' : ''}`}></div>
              </span>
            </label>
          </div>
          <div className='filter__price-text'>Лучшая цена</div>
        </div>
      </div>
    </>
  );
};

export default OtherFilters;
