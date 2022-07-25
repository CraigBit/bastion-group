import { useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { addType } from '../store/reducers/productTypeSlice';
import '../styles/Products.css';

const AddProductType = () => {
  const dispatch = useAppDispatch();

  const [type, setType] = useState({ number: '', name: '' });
  const [isEmptyInputs, setIsEmptyInputs] = useState(false);

  const addNewType = (e: any) => {
    e.preventDefault();
    const indicator = Object.values(type).some((item) => item == '');

    if (indicator) {
      setIsEmptyInputs(!isEmptyInputs);
      return;
    }

    dispatch(
      addType({
        id: Date.now(),
        ...type,
      })
    );
    setType({ number: '', name: '' });
  };

  return (
    <>
      <h2 className='products__title'>
        Добавить тип продукта{' '}
        {isEmptyInputs ? (
          <span style={{ color: 'red', marginLeft: '100px' }}>
            Заполните все поля!
          </span>
        ) : null}
      </h2>
      <form action='#' className='products__form'>
        <input
          type='text'
          placeholder='ID продукта (ввод только цифр)'
          className='products__field'
          value={type.number}
          onChange={(e) =>
            setType({ ...type, number: e.target.value.replace(/\D/, '') })
          }
        />
        <input
          type='text'
          placeholder='Название типа продукта'
          className='products__field'
          value={type.name}
          onChange={(e) => setType({ ...type, name: e.target.value })}
        />
        <button className='products__button' onClick={addNewType}>
          Добавить
        </button>
      </form>
    </>
  );
};

export default AddProductType;
