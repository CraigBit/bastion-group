import arrowUp from '../../../../img/main/mainpage/categories/categories-vector.svg';

const Catalog = () => {
  return (
    <>
      <div className='content__categories categories'>
        <p className='categories__label'>Категории</p>
        <div className='categories__vector'>
          <img src={arrowUp} alt='vector' />
        </div>
      </div>
      <div className='content__list list'>
        <div className='list__items'>
          <div className='list__item item'>
            <div className='item__title'>Серия 5.904-1 выпуск 1:</div>
            <div className='item__text'>
              Детали крепления воздуховодов{' '}
              <div className='item__text_figures'>95</div>
            </div>
          </div>
          <div className='list__item item'>
            <div className='item__title'>Серия 4.903-10 Выпуск 4,5,6:</div>
            <div className='item__text'>
              Изделия и детали трубопроводов для тепловых сетей{' '}
              <div className='item__text_figures'>15</div>
            </div>
          </div>
          <div className='list__item item'>
            <div className='item__title'>Серия 4.900-9 Выпуск 1:</div>
            <div className='item__text'>
              Узлы и детали трубопроводов из пластмассовых труб для систем
              водоснабжения и канализации{' '}
              <div className='item__text_figures'>247</div>
            </div>
          </div>
          <div className='list__item item'>
            <div className='item__title'>Серия 3.900-9:</div>
            <div className='item__text'>
              Опорные конструкции и средства крепления трубопроводов{' '}
              <div className='item__text_figures four'>2</div>
            </div>
          </div>
          <div className='list__item item'>
            <div className='item__title'>Л8-508.000 - Л8-524.000:</div>
            <div className='item__text'>
              Опоры и подвески трубопроводов Дн&lt;89мм{' '}
              <div className='item__text_figures'>15</div>
            </div>
          </div>
          <div className='list__item item'>
            <div className='item__title'>Л8-138.000 - Л8-200.000:</div>
            <div className='item__text'>
              Опоры и подвески станционных трубопроводов{' '}
              <div className='item__text_figures'>247</div>
            </div>
          </div>
        </div>
        <div className='list__show'>Показать всё</div>
      </div>
    </>
  );
};

export default Catalog;
