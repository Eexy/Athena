import React from "react";
import { Link } from "react-router-dom";
import {Button} from "antd";

interface HeaderMenuProps {
  setAuth(auth: boolean): void;
  isAuth: boolean;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ isAuth, setAuth }) => {
  const handleLogoutBtn = () => {
    localStorage.removeItem('jid');
    setAuth(false);
  }

  const defaultMenu = () => {
    return (
      <React.Fragment>
          <Link to="/signin">
            <Button id="login-btn" type="primary">Signin</Button>
          </Link>
          <Link to="/signup">
            <Button id="signup-btn">Signup</Button>
          </Link>
      </React.Fragment>
    );
  };

  const authMenu = () => {
    return (
      <React.Fragment>
          <Link to="/dashboard">
            <Button id="dashboard-btn" type="primary">Dashboard</Button>
          </Link>
          <Link to="/signin" onClick={handleLogoutBtn}>
            <Button id="logout-btn">Logout</Button>
          </Link>
      </React.Fragment>
    );
  };

  return (<div className="navbar-menu">{isAuth ? authMenu() : defaultMenu()}</div>);
};

export default HeaderMenu;
