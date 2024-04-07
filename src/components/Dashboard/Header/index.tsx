import type { FC } from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center bg-[#3E8CBB]">
      <div className="flex ml-[250px] gap-4">
        <div className="text-white ml-2">
          <MenuUnfoldOutlined />
        </div>
      </div>
      <div className="m-2">
        <button
          onClick={() => navigate("/login")}
          className="border border-bg-[#F5F%f5] text-sm text-white w-[86px] h-[36px] rounded-md flex justify-center items-center"
        >
          Chiqish
        </button>
      </div>
    </div>
  );
};

export default Header;
