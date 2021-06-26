import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import Editor from './parts/editor';
import Header from './parts/header';

const Dashboard: React.FC<PageProps> = ({ pageName }) => {
  useEffect(() => {
    document.title = `${pageName}`;
  });

  return (
    <div className="dashboard" style={{ height: '100%', minHeight: '100%' }}>
      <Row className="dashboard" style={{ minHeight: '100%' }}>
        <Col
          style={{
            height: '100%',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Header />
          <Editor />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
