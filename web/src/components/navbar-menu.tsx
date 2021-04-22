import { useMediaQuery } from "react-responsive";
import { Row, Button } from "antd";
import { Link } from "react-router-dom";

interface NavbarMenuProps{}

export const NavbarMenu: React.FC<NavbarMenuProps> = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 350px)" });

  return (
    <div className="menu">
      <Row>
        <Link to="/login">
          <Button
            type="primary"
            style={isSmallScreen ? {} : { marginRight: "0.8rem" }}
            className="login-btn"
          >
            Login
          </Button>
        </Link>
        {isSmallScreen ? null : (
          <Link to="/signup">
            <Button>Signup</Button>
          </Link>
        )}
      </Row>
    </div>
  );
};
