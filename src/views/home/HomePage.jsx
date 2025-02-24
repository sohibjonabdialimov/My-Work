import { Table } from "antd";
import "./home.css";
import CustomProgressBar from "../../components/CustomProgressBar";

const columns = [
  {
    title: "№",
    dataIndex: "key",
    key: "key",
  },
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
    sath: "245,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 3,
    time: "20-may 2024-yil, 11:29",
    sath: "250,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 4,
    time: "20-may 2024-yil, 11:31",
    sath: "260,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 5,
    time: "20-may 2024-yil, 11:30",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 6,
    time: "20-may 2024-yil, 11:29",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 7,
    time: "20-may 2024-yil, 11:31",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 8,
    time: "20-may 2024-yil, 11:30",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 9,
    time: "20-may 2024-yil, 11:29",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 10,
    time: "20-may 2024-yil, 11:31",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 11,
    time: "20-may 2024-yil, 11:30",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 12,
    time: "20-may 2024-yil, 11:29",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 13,
    time: "20-may 2024-yil, 11:31",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 14,
    time: "20-may 2024-yil, 11:30",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 15,
    time: "20-may 2024-yil, 11:29",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 16,
    time: "20-may 2024-yil, 11:31",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 17,
    time: "20-may 2024-yil, 11:30",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 18,
    time: "20-may 2024-yil, 11:29",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 19,
    time: "20-may 2024-yil, 11:31",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    key: 20,
    time: "20-may 2024-yil, 11:30",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
];

const HomePage = () => {
  return (
    <div className="py-4">
      <div className="flex justify-between items-center w-full flex-wrap mb-4 gap-3">
        <div className="flex-auto h-[7rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-lg pt-2">
          <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
            Temperatura
          </h3>
          <p className="text-2xl text-[#757575FF] font-bold">18.6</p>
          <CustomProgressBar color="#6BB2D7FF" progress={50} />
        </div>
        <div className="flex-auto h-[7rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-lg pt-2">
          <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
            Suv sathi
          </h3>
          <p className="text-2xl text-[#757575FF] font-bold">18.6</p>
          <CustomProgressBar color="#00FF00FF" progress={90.3} />
        </div>
        <div className="flex-auto h-[7rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-lg pt-2">
          <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
            Sho'rlanganligi
          </h3>
          <p className="text-2xl text-[#757575FF] font-bold">18.6</p>
          <CustomProgressBar color="#82A6F6FF" progress={45.5} />
        </div>
        <div className="flex-auto h-[7rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-lg pt-2">
          <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
            Ishqor miqdori
          </h3>
          <p className="text-2xl text-[#757575FF] font-bold">18.6</p>
          <CustomProgressBar color="#6A9308FF" progress={67.0} />
        </div>
      </div>
      <div className="main_content_h flex gap-4">
        
        <div className="scrollbar-custom sm:w-3/4 w-full h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            size="middle"
          />
        </div>
        <div className="sm:w-1/4 w-full h-full flex flex-col gap-2">
          <div className="bg-white rounded-lg">
            <h2 className="text-[#333] font-semibold text-lg text-center py-1 border-b-[1px] border-[#b3b3b3]">
              Qurilma tafsilotlari
            </h2>
            <div className="py-1 px-3 border-b-[1px] border-[#b3b3b3]">
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Holati:</p>
                <div className="flex items-center gap-1">
                  <span className="inline-block w-[15px] h-[15px] rounded-full bg-[#f63030]"></span>
                  <p className="uppercase text-[#f63030]">OFFLine</p>
                </div>
              </div>
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Nomi:</p>
                <p className="">Quduq N=304 Sirg'ali</p>
              </div>
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Telefon:</p>
                <p className="">+998(97) 636-79-75</p>
              </div>
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Chuqurlik sensori:</p>
                <p className="">11.65</p>
              </div>
            </div>
            <div className="px-3 border-b-[1px] border-[#b3b3b3]">
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Ma'lumotlar yangilanishi:</p>
                <p className="">+998(97) 636-79-75</p>
              </div>
            </div>
            <div className="px-3">
              <div className="py-1 flex justify-between text-[#5c5c5c]">
                <p>Dastur versiyasi:</p>
                <p className="">+998(97) 636-79-75</p>
              </div>
              <div className="py-1 flex justify-between text-[#5c5c5c]">
                <p>Dastur nomi:</p>
                <p className="">+998(97) 636-79-75</p>
              </div>
            </div>
          </div>
          <div
            className="flex-1 rounded-lg"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <a
              href="https://yandex.uz/maps?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: 12,
                position: "absolute",
                top: 0,
              }}
            >
              Yandex&nbsp;Xarita
            </a>
            <a
              href="https://yandex.uz/maps/geo/4040491070/?ll=66.972087%2C39.177573&utm_medium=mapframe&utm_source=maps&z=14.78"
              style={{
                color: "#eee",
                fontSize: 12,
                position: "absolute",
                top: 14,
              }}
            >
              Doniyorshayx aholi punkti — Yandex&nbsp;Xarita
            </a>
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=66.972087%2C39.177573&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MDQwNDkxMDcwEktPyrt6YmVraXN0b24sIFFhc2hxYWRhcnlvIHZpbG95YXRpLCBLaXRvYiB0dW1hbmksIERvbml5b3JzaGF5eCBhaG9saSBwdW5rdGkiCg1t8oVCFR-3HEI%2C&z=14.78"
              width="100%"
              height={"100%"}
              frameBorder={1}
              allowFullScreen="true"
              style={{ position: "relative" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
