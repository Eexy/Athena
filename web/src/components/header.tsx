import HeaderMenu from "./header-menu"

interface HeaderProps{
  setAuth(auth: boolean): void;
  isAuth: boolean;
};

const Header: React.FC<HeaderProps> = ({setAuth, isAuth}) => {
  return (
    <div className="header">
      <nav className="navbar">
        <HeaderMenu setAuth={setAuth} isAuth={isAuth}/>
      </nav>
    </div>
  )
}

export default Header;