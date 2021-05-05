import { ExportOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Title from "antd/lib/typography/Title";
import {Link} from "react-router-dom";
import logout from "../utils/logout";

const Sidebar = () => {
  const handleLogoutClick = () => {
    logout();
  };

  return (
    <div className="sidebar" style={{height: '100%'}}>
      <Menu
        selectedKeys={["dashboard"]}
        defaultSelectedKeys={["dashboard"]}
        style={{ width: 256, height: '100%' }}
      >
        <Title
          level={3}
          style={{ fontSize: "1.8rem", padding: "1.8rem 0 1.8rem 1rem" }}
        >
          .athena
        </Title>
        <Menu.Item icon={<HomeOutlined />} key="dashboard">
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item icon={<ExportOutlined />} key="logout" onClick={handleLogoutClick}>
          Logout
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
