import { Table } from "antd";
import "./home.css";

const columns = [
  {
    title: "O'lchangan vaqti",
    dataIndex: "time",
    key: "time",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Suv sathi, (sm)",
    dataIndex: "sath",
    key: "sath",
  },
  {
    title: <p>Temperatura, (0&#176;C)</p>,
    dataIndex: "temperature",
    key: "temperature",
  },
  {
    title: "Sho'rlanganligi, (TDS)",
    dataIndex: "salinity",
    key: "salinity",
  },
  {
    title: "Ishqor miqdori, (pH)",
    dataIndex: "potash",
    key: "potash",
  },
];

const data = [
  {
    key: 1,
    time: "20-may 2024-yil, 11:31",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 2,
    time: "20-may 2024-yil, 11:30",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 3,
    time: "20-may 2024-yil, 11:29",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
];
const HomePage = () => {
  return (
    <div className="py-6">
      <h1 className="mb-16 font-semibold mt-24">Quduqning ko'rsatgichlari</h1>

      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default HomePage;
