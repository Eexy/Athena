import { Link } from "react-router-dom"

interface HeaderProps{};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-menu-item">
            <Link to="/signin">
              <button id="login-btn">Signin</button>
            </Link>
            <Link to="/signup">
              <button id="signup-btn">Signup</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;