import { useEffect } from "react";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  useEffect(() => {
    document.title = "Athena | Home"
  }, []);

  return <p>Hello World</p>;
};
