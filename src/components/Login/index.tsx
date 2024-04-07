import { Form, Input, Select } from "antd";
import type { FC } from "react";
import { useReduxDispatch } from "../../hooks/useredux";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  return (
    <div className="mt-[100px] w-[30%] m-auto">
      <div className=" pt-[50px] border border-t-[#3E8CBB]">
        <div className=" mr-5 flex justify-end items-center">
          <Select
            // onChange={(e) => sortswitcher(e)}
            defaultValue="Uz"
            style={{ width: 60 }}
            options={[
              {
                label: "Uz",
                value: "uz",
              },
              {
                label: "En",
                value: "en",
              },
              {
                label: "Rus",
                value: "rus",
              },
            ]}
          />
        </div>
        <div className="flex justify-center items-center">
          <h2 className="font-semibold text-base">MB</h2>
        </div>
        <div className="flex justify-center items-center  font-bold">
          <Form className="w-[90%]">
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Foydalanuvchini nomini kiriting" },
              ]}
            >
              <Input
                className="h-10 mt-3 border border-[#46A358]"
                placeholder="Foydalanuvchi nomi"
                type="username"
              ></Input>
            </Form.Item>
            <Form.Item
              hasFeedback
              name="password"
              rules={[{ required: true, message: "Parolingizni kiriting" }]}
            >
              <Input
                className="h-10  mt-3 border border-[#46A358]"
                placeholder="Parol"
                type="password"
              ></Input>
            </Form.Item>
          </Form>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          type="submit"
          className="bg-[#1677FF] flex rounded-md items-center justify-center  text-base text-white ml-5 w-[90%] h-11 my-7"
        >
          Yuborish
        </button>
      </div>
    </div>
  );
};

export default Login;
