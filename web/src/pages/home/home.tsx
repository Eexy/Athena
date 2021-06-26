import React, { useEffect } from 'react';
import Header from '../../shared/parts/header/header';
import Hero from './components/hero/hero';

const Home: React.FC<PageProps> = ({ pageName }) => {
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
