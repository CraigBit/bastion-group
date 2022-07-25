import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';

import name from '../../img/cart/contact-icons/customer-name.svg';
import phone from '../../img/cart/contact-icons/phone.svg';
import email from '../../img/cart/contact-icons/email.svg';
import company from '../../img/cart/contact-icons/briefcase.svg';
import { useAppSelector } from '../../hooks/hooks';
import { priceToPay } from '../../utilities/formatPrice';

const CartForm = () => {
  const overAllPrice = useAppSelector((state) =>
    state.cartItemSlice.cartItem
      .map((item) => +item.price * item.quantity)
      .reduce((sum, current) => sum + current, 0)
  );

  const itemLog = useAppSelector((state) => state.cartItemSlice.cartItem);

  const needToPay = priceToPay(overAllPrice);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(
      `Покупатель`,
      `\n`,
      `\nФИО: ${data.fullname}`,
      `\n----------------------`,
      `\nТелефон: ${data.phone}`,
      `\n----------------------`,
      `\nПочта: ${data.email}`,
      `\n----------------------`,
      `\nОрганизация: ${data.company}`,
      `\n`,
      `\nЗаказал`
    );

    itemLog.forEach((item) =>
      console.log(`${item.name}, количество: ${item.quantity}`)
    );
  };

  return (
    <>
      <div className='right-cart__order'>
        <div className='right-cart__order-title'>Заказ</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='right-cart__contacts-cart contacts-cart'>
          <div className='contacts-cart__title'>Контактная информация</div>
          <div className='contacts-cart__label'>ФИО</div>
          <div className='contacts-cart__section-first'>
            <div className='contacts-cart__image'>
              <img src={name} alt='customer-name' />
            </div>
            <input
              type='text'
              {...register('fullname', {
                validate: (value) =>
                  value.match(
                    /^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?\s[А-ЯЁ][а-яё]*\s[А-ЯЁ][а-яё]*$/
                  ) || 'Неверное ФИО',
              })}
              className='contacts-cart__name-field'
            />
            <div className='contacts-cart__error-first'>
              {errors?.fullname?.message && (
                <span>{errors.fullname.message as unknown as string}</span>
              )}
            </div>
          </div>
          <div className='contacts-cart__section'>
            <div className='contacts-cart__image'>
              <img src={phone} alt='customer-phone' />
            </div>
            <InputMask
              mask='+7 (999)-999-99-99'
              {...register('phone', {
                validate: (value) =>
                  (!value.includes('_') && value !== '') ||
                  'Заполните все поля',
              })}
              placeholder='Контактный телефон'
              className='contacts-cart__phone-field'
            />
            <div className='contacts-cart__error'>
              {errors?.phone?.message && (
                <span>{errors.phone.message as unknown as string}</span>
              )}
            </div>
          </div>
          <div className='contacts-cart__section'>
            <div className='contacts-cart__image'>
              <img src={email} alt='customer-email' />
            </div>
            <input
              type='text'
              className='contacts-cart__email-field'
              placeholder='Email'
              {...register('email', {
                validate: (value) =>
                  value
                    .toLowerCase()
                    .match(
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    ) || 'Некорректный email',
              })}
            />
            <div className='contacts-cart__error'>
              {errors?.email?.message && (
                <span>{errors.email.message as unknown as string}</span>
              )}
            </div>
          </div>
          <div className='contacts-cart__section'>
            <div className='contacts-cart__image'>
              <img src={company} alt='company' />
            </div>
            <input
              type='text'
              className='contacts-cart__company-field'
              placeholder='Организация / ИНН'
              {...register('company', {
                required: 'Поле должно быть заполнено',
              })}
            />
            <div className='contacts-cart__error'>
              {errors?.company?.message && (
                <span>{errors.company.message as unknown as string}</span>
              )}
            </div>
          </div>
        </div>
        <div className='right-cart__make-order make-order'>
          <div className='make-order__first-line'>
            <div className='make-order__label'>Итого</div>
            <div className='make-order__price'>{needToPay} руб.</div>
          </div>
          <button className='make-order__confirm-button'>Оформить заказ</button>
          <button className='make-order__offer-button'>
            Коммерческое предложение
          </button>
        </div>
      </form>
    </>
  );
};

export default CartForm;
