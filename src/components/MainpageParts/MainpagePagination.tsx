import arrowLeft from '../../img/main/mainpage/pagination/arrow-left.svg';
import arrowRight from '../../img/main/mainpage/pagination/arrow-right.svg';

const MainpagePagination = () => {
  return (
    <>
      <div className='mainpage__settings settings'>
        <div className='settings__left'></div>
        <div className='settings__right right'>
          <div className='right__pages pages'>
            <div className='pages__sorting'>Выводить по</div>
            <div className='pages__nine'>9</div>
            <div className='pages__fifteen'>15</div>
            <div className='pages__twenty-one'>21</div>
          </div>
          <div className='right__pagination pagination'>
            <div className='pagination__by-page by-page'>
              <div className='by-page__arrows'>
                <img src={arrowLeft} alt='arrow-right' />
              </div>
              <div className='by-page__item _black'>1</div>
              <div className='by-page__item'>2</div>
              <div className='by-page__item'>3</div>
              <div className='by-page__item'>4</div>
              <div className='by-page__item'>5</div>
              <div className='by-page__arrows'>
                <img src={arrowRight} alt='arrow-left' />
              </div>
            </div>
            <div className='pagination__show-all'>Показать все товары</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainpagePagination;
