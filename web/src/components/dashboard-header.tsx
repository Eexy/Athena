import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Row } from "antd";

interface DashboardHeaderProps {
  displayMenu: boolean;
  displayMobileMenu(value: boolean): void;
  isMobileMenuDisplay: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ displayMenu, displayMobileMenu, isMobileMenuDisplay }) => {
  const handleClick = () => {
    displayMobileMenu(!isMobileMenuDisplay);
  }

  return (
    <Row
      justify={displayMenu ? "end" : "space-between"}
      style={{ paddingBottom: "1rem" }}
      align="middle"
    >
      {!displayMenu ? (
        <Col>
          <Button onClick={handleClick}>
            <MenuOutlined />
          </Button>
        </Col>
      ) : null}
      <Col className="user">
        <Row align="middle">
          <span className="email" style={{ paddingRight: "0.7rem" }}>
            test@gmail.com
          </span>
          <Avatar size={32} icon={<UserOutlined />} />
        </Row>
      </Col>
    </Row>
  );
};

export default DashboardHeader;
