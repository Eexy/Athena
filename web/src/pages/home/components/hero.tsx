import { Col, Row, Image } from 'antd';
import HeroDesc from './hero-desc';

const Hero: React.FC = () => {
  return (
    <div className="Hero" style={{ padding: '1.5rem' }}>
      <Row>
        <Col>
          <HeroDesc />
        </Col>
        <Col style={{ flex: '1' }}>
          <Row justify="end">
            <Image src="/media/hero.svg" width={500} preview={false} />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
