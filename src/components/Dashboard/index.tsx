import type { FC } from "react";
import General from "./General";
import Header from "./Header";

const Dashboard: FC = () => {
  return (
    <div className="w-full bg-[#EBF0F5]">
      <Header />
      <General />
    </div>
  );
};

export default Dashboard;
