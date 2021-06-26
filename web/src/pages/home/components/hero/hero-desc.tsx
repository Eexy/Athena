import React from 'react';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const HeroDesc: React.FC = () => (
  <div className="hero-desc">
    <Title level={3}>Another Todo App</Title>
    <Paragraph>
      You are searching the best todo app ? The one who will really healped you
      achieved your goal ? <br />
      We are please to announce you that athena its just another todo app like
      the other. <br />
      Literraly that is not a lie. We dont have special feature we just create
      todo. <br /> Its juste simple as that so maybe that what you need, a
      simple app for complicated things.
    </Paragraph>
    <Link to="/signup">
      <Button type="primary">Join Us</Button>
    </Link>
  </div>
);

export default HeroDesc;
