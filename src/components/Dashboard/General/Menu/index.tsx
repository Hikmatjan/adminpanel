import type { FC } from "react";
import { Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  SettingFilled,
  UserAddOutlined,
  HeatMapOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

const Menu: FC = () => {
  return (
    <div className="flex">
      <div className=" min-w-[250px] bg-[#333D41] p-[15px] h-[559px] ">
        <div>
          <ul className="text-white ml-5">
            <li>
              <DashboardOutlined className="mr-2 mb-4" />
              <Link to="/home">Dashboard</Link>
            </li>
            <li>
              <UserAddOutlined className="mr-2  mb-4" />
              <Link to="/users">Foydalanuvchilar</Link>
            </li>
            <li>
              <HeatMapOutlined className="mr-2  mb-4" />
              <Link to="/map">Map</Link>
            </li>
            <li>
              <SettingFilled className="mr-2  mb-4" />
              <Link to="/sozlama">Sozlamalar</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
