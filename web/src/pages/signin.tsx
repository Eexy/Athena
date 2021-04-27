import { useEffect } from "react";
import AuthForm from "../components/auth-form";
import PageProps from "../utils/page-props";

interface SigninProps extends PageProps  {}

const Signin: React.FC<SigninProps> = ({pageName}) => {
  useEffect(() => {
    document.title = `Athena | ${pageName}`;
  }, []);

  return <div>
    <AuthForm type="signin" />
  </div>;
};

export default Signin;