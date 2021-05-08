import {  useEffect } from 'react';
import PageProps from '../scripts/page-props';

interface HomeProps extends PageProps {}

const Home: React.FC<HomeProps> = ({ pageName }) => {
  useEffect(() => {
    document.title = `${pageName}`;
  }, []);

  return (<div></div>);
};

export default Home;
