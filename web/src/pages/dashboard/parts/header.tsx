import { UserOutlined } from '@ant-design/icons';
import { Row, Col, Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import { useMeQuery } from '../../../generated/graphql';

const Header: React.FC = () => {
  const [me, meQuery] = useMeQuery();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const { data } = me;
    if (data) {
      setEmail(data.me.email);
    }
  }, [me]);

  return (
    <div className="editor__header" style={{ padding: '1rem' }}>
      <Row align="middle" justify="end">
        <Col style={{ justifySelf: 'end' }}>
          <div className="user">
            <Row align="middle">
              <span className="user-email" style={{ marginRight: '0.5rem' }}>
                {email}
              </span>
              <Avatar size={32} icon={<UserOutlined />} />
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
