import '../styles/MainPage.css';

import MainpageDescription from '../components/MainpageParts/MainpageDescription';
import MainpageHeader from '../components/MainpageParts/MainpageHeader';
import MainpageContent from '../components/MainpageParts/MainpageContent/MainpageContent';
import MainpagePagination from '../components/MainpageParts/MainpagePagination';

const MainPage = () => {
  return (
    <>
      <MainpageHeader />
      <MainpageContent />
      <MainpagePagination />
      <MainpageDescription />
    </>
  );
};

export default MainPage;
