import { SyntheticEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { addProduct } from '../store/reducers/newProductSlice';
import '../styles/Products.css';

const AddProductItem = () => {
  const productTypes = useAppSelector(
    (state) => state.productTypeSlice.productTypes
  );
  const dispatch = useAppDispatch();

  const [isEmptyInputs, setIsEmptyInputs] = useState(false);
  const [product, setProduct] = useState({
    number: '',
    name: '',
    type: '',
    price: '',
    standard: '',
    photo: '',
  });

  const addNewProduct = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const indicator = Object.values(product).some((item) => item == '');

    if (indicator) {
      setIsEmptyInputs(!isEmptyInputs);
      return;
    }

    dispatch(
      addProduct({
        id: Date.now(),
        ...product,
        quantity: 0,
        isActive: false,
      })
    );

    setProduct({
      number: '',
      name: '',
      type: product.type,
      price: '',
      standard: '',
      photo: product.photo,
    });
  };

  return (
    <>
      <h2 className='products__title'>
        Добавить продукт{' '}
        {isEmptyInputs ? (
          <span style={{ color: 'red', marginLeft: '60px' }}>
            Заполните все поля!
          </span>
        ) : null}
      </h2>
      <form action='#' className='products__form'>
        <input
          type='text'
          placeholder='ID продукта (ввод только цифр)'
          className='products__field'
          value={product.number}
          onChange={(e) =>
            setProduct({ ...product, number: e.target.value.replace(/\D/, '') })
          }
        />
        <input
          type='text'
          placeholder='Название продукта'
          className='products__field'
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <select
          defaultValue='Тип продукта'
          className='products__field'
          onChange={(e) => setProduct({ ...product, type: e.target.value })}>
          <option value='Тип продукта' disabled>
            Тип продукта
          </option>
          {productTypes.map((type) => {
            return (
              <option key={type.id} value={type.name}>
                {type.name}
              </option>
            );
          })}
        </select>
        <input
          type='text'
          placeholder='Цена (ввод только цифр и точек)'
          className='products__field'
          value={product.price}
          onChange={
            (e) =>
              setProduct({
                ...product,
                price: e.target.value.replace(/[^\d\.]/g, ''),
              })
            //
          }
        />
        <input
          type='text'
          placeholder='ГОСТ'
          className='products__field'
          value={product.standard}
          onChange={(e) => setProduct({ ...product, standard: e.target.value })}
        />
        <input
          type='file'
          accept='image/*'
          onChange={(e) =>
            setProduct({
              ...product,
              photo: URL.createObjectURL(e.target.files![0]),
            })
          }
        />
        <button className='products__button' onClick={addNewProduct}>
          Добавить
        </button>
      </form>
    </>
  );
};

export default AddProductItem;
