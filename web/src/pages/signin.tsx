import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import AuthForm from '../components/auth-form';
import { useLoginMutation } from '../generated/graphql';
import PageProps from '../scripts/page-props';
import { Row, Col } from 'antd';
import { AuthContext } from '../context/auth-context';

interface SigninProps extends PageProps {}

const Signin: React.FC<SigninProps> = ({ pageName}) => {
  const {auth,setAuth} = useContext(AuthContext);  
  const history = useHistory();
  const [, login] = useLoginMutation();

  useEffect(() => {
    document.title = `Athena | ${pageName}`;
  }, []);

  const getAuthFormValue = async (email: string, password: string) => {
    try {
      const res = await login({ email, password });
      const { data } = res;

      if (data?.login.token) {
        localStorage.setItem('jid', data.login.token);
        setAuth(true);
        history.push('/dashboard');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Row justify='center' style={{ padding: '1.5rem 0' }}>
      <Col>
        <AuthForm type='signin' getAuthFormValue={getAuthFormValue} />
      </Col>
    </Row>
  );
};

export default Signin;
