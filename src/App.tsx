import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import MainPage from './pages/MainPage';
import AddProductItem from './pages/AddProductItem';
import AddProductType from './pages/AddProductType';
import Cart from './pages/Cart';

const App: FC = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path='types' element={<AddProductType />} />
            <Route path='list' element={<AddProductItem />} />
            <Route path='cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
