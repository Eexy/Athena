import React, { useEffect } from 'react';
import Header from '../../shared-components/header';
import { PageProps } from '../../utils/types';
import Hero from './components/hero';

interface HomeProps extends PageProps {}

const Home: React.FC<HomeProps> = ({ pageName }) => {
  useEffect(() => {
    document.title = `${pageName}`;
  }, []);

  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default Home;
