import { useEffect } from "react";
import AuthForm from "../components/auth-form";
import { useLoginMutation } from "../generated/graphql";
import PageProps from "../utils/page-props";

interface SigninProps extends PageProps {
}

const Signin: React.FC<SigninProps> = ({ pageName }) => {
  const [, login] = useLoginMutation();

  useEffect(() => {
    document.title = `Athena | ${pageName}`;
  }, []);

  const getAuthFormValue = async (email: string, password: string) => {
    try{
      const res = await login({email, password});
      const {data} = res;

      // if(data?.login.token){
      //   setAuthToken(data.login.token);
      // }
    }catch(e){
      console.log(e);
    }
  };

  return (
    <div>
      <AuthForm type="signin" getAuthFormValue={getAuthFormValue} />
    </div>
  );
};

export default Signin;
