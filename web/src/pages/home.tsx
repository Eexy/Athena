interface HomeProps{
  isAuth: boolean;
}

export const Home: React.FC<HomeProps> = ({isAuth}) => {
  console.log(isAuth);
  return (<p>Hello World</p>);
}