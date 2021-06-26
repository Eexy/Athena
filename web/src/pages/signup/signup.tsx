import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router';
import { useRegisterMutation } from '../../generated/graphql';
import AuthContext from '../../context/auth-context';
import AuthForm from '../../shared/components/auth-form';
import Header from '../../shared/parts/header/header';

const Signup: React.FC<PageProps> = ({ pageName }) => {
  const { setAuth } = useContext(AuthContext);
  const history = useHistory();
  const [, signup] = useRegisterMutation();

  useEffect(() => {
    document.title = `Athena | ${pageName}`;
  }, []);

  const getAuthFormValue = async (email: string, password: string) => {
    try {
      const res = await signup({ email, password });
      const { data } = res;

      if (data?.register.token) {
        localStorage.setItem('jid', data.register.token);
        setAuth(true);
        history.push('/dashboard');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header />
      <Row justify="center" style={{ padding: '1.5rem 0' }}>
        <Col>
          <AuthForm type="signup" getAuthFormValue={getAuthFormValue} />
        </Col>
      </Row>
    </>
  );
};

export default Signup;
