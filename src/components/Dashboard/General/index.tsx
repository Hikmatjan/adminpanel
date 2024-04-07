import type { FC } from "react";
import Content from "./Content";
import Menu from "./Menu";

const General: FC = () => {
  return (
    <div className="flex ">
      <Menu />
      <Content />
    </div>
  );
};

export default General;
