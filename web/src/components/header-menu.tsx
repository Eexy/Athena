import React from "react";
import { Link } from "react-router-dom";

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
        <li className="navbar-menu-item">
          <Link to="/signin">
            <button id="login-btn">Signin</button>
          </Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/signup">
            <button id="signup-btn">Signup</button>
          </Link>
        </li>
      </React.Fragment>
    );
  };

  const authMenu = () => {
    return (
      <React.Fragment>
        <li className="navbar-menu-item">
          <Link to="/dashboard">
            <button id="dashboard-btn">Dashboard</button>
          </Link>
        </li>
        <li className="navbar-menu-item">
          <Link to="/signin" onClick={handleLogoutBtn}>
            <button id="logout-btn">Logout</button>
          </Link>
        </li>
      </React.Fragment>
    );
  };

  return (<ul className="navbar-menu">{isAuth ? authMenu() : defaultMenu()}</ul>);
};

export default HeaderMenu;
