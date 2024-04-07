import type { FC } from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useState } from "react";

type TableRowSelection<T> = TableProps<T>["rowSelection"];
interface DataType {
  key: React.Key;
  ismi: string;
  address: string;
  joylashuvi: string;
  Type: string;
  connection_method: string;
  update_date: string;
  update_at: string;
}
const columns: TableColumnsType<DataType> = [
  {
    title: "Ismi",
    dataIndex: "name",
  },
  {
    title: "Joylashuvi(At-Long)",
    dataIndex: "joylashuvi",
  },
  {
    title: "Manzili",
    dataIndex: "address",
  },
  {
    title: "Type",
    dataIndex: "Type",
  },
  {
    title: "Connection Method",
    dataIndex: "connection_method",
  },
  {
    title: "Update_date",
    dataIndex: "update_date",
  },
  {
    title: "Update_at",
    dataIndex: "update_at",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 3; i++) {
  data.push({
    key: i,
    ismi: "Hikmat Toyirov ",
    joylashuvi: "Tashkent shahri",
    address: "Tashkent, Yangihayot  ",
    Type: "string ",
    connection_method: "Boolean ",
    update_date: "12.02.2012",
    update_at: "04.12.2024 ",
  });
}

const Content: FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div className=" w-[95%]">
      <div className="m-5">
        <button className=" text-sm text-white rounded-md w-[90px] h-[36px] bg-[#008000]">
          + Qoshish
        </button>
      </div>
      <div className=" m-5 h-[100%] flex gap-8 ">
        <div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
