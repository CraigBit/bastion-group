import '../styles/Layout.css';
import logo from '../img/header/logo.svg';
import star from '../img/header/favorite-icon.svg';
import cart from '../img/header/shopping-cart-icon.svg';
import upper from '../img/footer/contact-field.svg';
import lower from '../img/footer/footer-black.jpg';
import { Link, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

function Layout() {
  const cartCounter = useAppSelector((state) => state.cartItemSlice.cartItem);
  return (
    <>
      <div className='wrapper'>
        <header>
          <div className='header__upper'>
            <div className='header__container _container'>
              <div className='header__menu menu'>
                <nav className='menu__block'>
                  <ul className='menu__list_left'>
                    <li className='menu__item'>
                      <Link to='/' className='menu__link'>
                        Главная
                      </Link>
                    </li>
                    <li className='menu__item'>
                      <Link to='types' className='menu__link'>
                        Типы продуктов
                      </Link>
                    </li>
                    <li className='menu__item'>
                      <Link to='list' className='menu__link'>
                        Продукты
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className='menu__contacts'>
                  <ul className='menu__list_right'>
                    <li className='menu__item'>
                      <a href='tel:000000000000' className='menu__phone'>
                        +7 (499) 380-78-90
                      </a>
                    </li>
                    <li className='menu__item'>
                      <a href='#' className='menu__city'>
                        Москва
                      </a>
                    </li>
                    <li className='menu__item'>
                      <a href='#' className='menu__mail'>
                        info@bastion.pro
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='header__lower'>
            <div className='header__container _container'>
              <div className='header__white white'>
                <div className='white__logo'>
                  <img src={logo} alt='bastion group' />
                </div>
                <div className='white__title'>
                  Производитель металлических изделий №1
                </div>
                <div className='white__catalog'>Каталог</div>
                <div className='white__search'>
                  <input
                    className='white__searh_field'
                    type='text'
                    placeholder='Поиск по названию…'
                  />
                </div>
                <div className='white__favorite'>
                  <img src={star} alt='favorite' />
                  <p className='white__label'>Избранное</p>
                </div>
                <Link to='cart'>
                  <div className='white__cart'>
                    <div className='white__counter'>
                      {cartCounter.length ? cartCounter.length : null}
                    </div>
                    <img src={cart} alt='cart' />
                    <p className='white__label'>Корзина</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main className='main'>
          <div className='page__history history'>
            <div className='history__container _container'>
              <div className='history__list'>
                <p className='history__item'>Главная</p>
                <p className='history__item'>Интернет-магазин</p>
                <p className='history__item'>Опоры трубопроводов</p>
              </div>
            </div>
          </div>
          <div className='page__body body'>
            <div className='body__container _container'>
              <Outlet />
            </div>
          </div>
        </main>
        <footer className='footer'>
          <div className='footer__upper upper'>
            <div className='upper__container _container'>
              <div className='upper__frame'>
                <div className='upper__image _ibg'>
                  <img src={upper} alt='contact information' />
                </div>
              </div>
            </div>
          </div>
          <div className='footer__lower lower'>
            <div className='lower__container _container'>
              <div className='lower__frame'>
                <div className='lower__image _ibg'>
                  <img src={lower} alt='bastion black' />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
