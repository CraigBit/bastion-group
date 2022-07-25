import view from '../../img/main/mainpage/header-block/sort-view.svg';

const MainpageHeader = () => {
  return (
    <>
      <div className='mainpage__header'>
        <h2 className='mainpage__title'>Опоры трубопроводов</h2>
        <div className='mainpage__sort sort'>
          <div className='sort__options'>Сначала популярные</div>
          <div className='sort__view'>
            <img src={view} alt='sort-view' />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainpageHeader;
