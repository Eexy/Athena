import { useEffect } from "react";
import AuthForm from "../components/auth-form";
import PageProps from "../utils/page-props";

interface SignupProps extends PageProps{}

const Signup: React.FC<SignupProps> = ({pageName}) => {
  useEffect(() => {
    document.title = `Athena | ${pageName}`;
  }, []);

  return <div>
    <AuthForm type="signup"/>
  </div>;
};

export default Signup;