import { Table } from "antd";
import "./home.css";
import CustomProgressBar from "../../components/CustomProgressBar";

const columns = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
    width: "",
  },
  {
    title: "O'lchangan vaqti",
    dataIndex: "sana",
    key: "sana",
    render: (text) => <a>{text}</a>,
    width: "15%",
  },
  {
    title: "Suv sathi, (sm)",
    dataIndex: "chuqurlik",
    key: "chuqurlik",
  },
  {
    title: <p>Temperatura, (0&#176;C)</p>,
    dataIndex: "tC",
    key: "tC",
  },
  {
    title: "Sho'rlanganligi, (TDS)",
    dataIndex: "tds",
    key: "tds",
  },
  {
    title: "Ishqor miqdori, (pH)",
    dataIndex: "pH",
    key: "pH",
  },
  {
    title: "Eh",
    dataIndex: "eh",
    key: "eh",
  },
];

const waterData = [
  {
    id: 1,
    sana: "20-may 2024 yil, 9-30",

    chuqurlik: 18.5,
    pH: 6.7,
    tC: 15.0,
    eh: 4.2,
    tds: 500,
  },
  {
    id: 2,
    sana: "20-may 2024 yil, 15-30",

    chuqurlik: 18.56,
    pH: 6.68,
    tC: 15.03,
    eh: 4.2,
    tds: 501.2,
  },
  {
    id: 3,
    sana: "20-may 2024 yil, 21-30",

    chuqurlik: 18.7,
    pH: 6.68,
    tC: 15.02,
    eh: 4.21,
    tds: 501.2,
  },
  {
    id: 4,
    sana: "21-may 2024 yil, 2-30",

    chuqurlik: 18.83,
    pH: 6.7,
    tC: 15.02,
    eh: 4.22,
    tds: 501.2,
  },
  {
    id: 5,
    sana: "21-may 2024 yil, 9-30",

    chuqurlik: 18.91,
    pH: 6.65,
    tC: 15.02,
    eh: 4.22,
    tds: 501.1,
  },
  {
    id: 6,
    sana: "21-may 2024 yil, 15-30",

    chuqurlik: 18.99,
    pH: 6.64,
    tC: 15.02,
    eh: 4.22,
    tds: 501.1,
  },
  {
    id: 7,
    sana: "21-may 2024 yil, 21-30",

    chuqurlik: 19.07,
    pH: 6.63,
    tC: 15.03,
    eh: 4.22,
    tds: 501.1,
  },
  {
    id: 8,
    sana: "22-may 2024 yil, 2-30",

    chuqurlik: 19.16,
    pH: 6.63,
    tC: 15.03,
    eh: 4.22,
    tds: 501.1,
  },
  {
    id: 9,
    sana: "22-may 2024 yil, 9-30",

    chuqurlik: 19.24,
    pH: 6.62,
    tC: 15.04,
    eh: 4.23,
    tds: 501.2,
  },
  {
    id: 10,
    sana: "22-may 2024 yil, 15-30",

    chuqurlik: 19.41,
    pH: 6.61,
    tC: 15.04,
    eh: 4.24,
    tds: 501.2,
  },
  {
    id: 11,
    sana: "22-may 2024 yil, 21-30",

    chuqurlik: 19.49,
    pH: 6.6,
    tC: 15.04,
    eh: 4.24,
    tds: 501.3,
  },
  {
    id: 12,
    sana: "23-may 2024 yil, 2-30",

    chuqurlik: 19.57,
    pH: 6.58,
    tC: 15.04,
    eh: 4.25,
    tds: 501.4,
  },
  {
    id: 13,
    sana: "23-may 2024 yil, 9-30",

    chuqurlik: 19.66,
    pH: 6.57,
    tC: 15.05,
    eh: 4.25,
    tds: 501.4,
  },
  {
    id: 14,
    sana: "23-may 2024 yil, 15-30",

    chuqurlik: 19.74,
    pH: 6.56,
    tC: 15.05,
    eh: 4.25,
    tds: 501.5,
  },
  {
    id: 15,
    sana: "23-may 2024 yil, 21-31",

    chuqurlik: 19.82,
    pH: 6.55,
    tC: 15.05,
    eh: 4.25,
    tds: 501.5,
  },
  {
    id: 16,
    sana: "24-may 2024 yil, 2-30",

    chuqurlik: 19.90,
    pH: 6.54,
    tC: 15.05,
    eh: 4.26,
    tds: 501.6,
  },
  {
    id: 17,
    sana: "24-may 2024 yil, 9-30",

    chuqurlik: 19.99,
    pH: 6.53,
    tC: 15.06,
    eh: 4.26,
    tds: 501.6,
  },
  {
    id: 18,
    sana: "24-may 2024 yil, 15-31",

    chuqurlik: 20.07,
    pH: 6.52,
    tC: 15.06,
    eh: 4.26,
    tds: 501.7,
  },
  {
    id: 19,
    sana: "24-may 2024 yil, 21-31",

    chuqurlik: 20.15,
    pH: 6.51,
    tC: 15.06,
    eh: 4.26,
    tds: 501.7,
  },
  {
    id: 20,
    sana: "25-may 2024 yil, 2-30",

    chuqurlik: 20.24,
    pH: 6.5,
    tC: 15.06,
    eh: 4.26,
    tds: 501.8,
  },
  {
    id: 21,
    sana: "24-may 2024 yil, 9-32",

    chuqurlik: 20.32,
    pH: 6.5,
    tC: 15.06,
    eh: 4.26,
    tds: 501.8,
  },
];

const HomePage = () => {
  return (
    <div className="py-4">
      <div className="flex justify-between items-center w-full flex-wrap mb-4 gap-3">
        <div className="flex-auto h-[7rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-lg pt-2">
          <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
            Temperatura <span>(C&#176;)</span>
          </h3>
          <p className="text-2xl text-[#757575FF] font-bold">18.6</p>
          <CustomProgressBar color="#6BB2D7FF" progress={50} />
        </div>
        <div className="flex-auto h-[7rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-lg pt-2">
          <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
            Suv sathi <span className="normal-case">(m)</span>
          </h3>
          <p className="text-2xl text-[#757575FF] font-bold">25.6</p>
          <CustomProgressBar color="#00FF00FF" progress={90.3} />
        </div>
        <div className="flex-auto h-[7rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-lg pt-2">
          <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
            Sho'rlanganligi <span>(TDS)</span>
          </h3>
          <p className="text-2xl text-[#757575FF] font-bold">14.4</p>
          <CustomProgressBar color="#82A6F6FF" progress={45.5} />
        </div>
        <div className="flex-auto h-[7rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-lg pt-2">
          <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
            Ishqor miqdori <span className="normal-case">(pH)</span>
          </h3>
          <p className="text-2xl text-[#757575FF] font-bold">18.6</p>
          <CustomProgressBar color="#6A9308FF" progress={67.0} />
        </div>
        <div className="flex-auto h-[7rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-lg pt-2">
          <h3 className="text-[#a8a8a8] text-base font-semibold">
            Eh 
          </h3>
          <p className="text-2xl text-[#757575FF] font-bold">34.5</p>
          <CustomProgressBar color="#6A90b8FF" progress={74.0} />
        </div>
      </div>
      <div className="main_content_h flex gap-3">
        <div className="scrollbar-custom sm:w-[70%] w-full h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
          <Table
            columns={columns}
            dataSource={waterData}
            pagination={false}
            size="middle"
          />
        </div>
        <div className="sm:w-[30%] w-full h-full flex flex-col gap-2">
          <div className="bg-white rounded-lg">
            <h2 className="text-[#333] font-semibold text-lg text-center py-1 border-b-[1px] border-[#b3b3b3]">
              Qurilma tafsilotlari
            </h2>
            <div className="py-1 px-3 border-b-[1px] border-[#b3b3b3]">
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Holati:</p>
                <div className="flex items-center gap-1">
                  <span className="inline-block w-[15px] h-[15px] rounded-full bg-[#f63030]"></span>
                  <p className="uppercase text-[#f63030]">OFFLINE</p>
                </div>
              </div>
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Nomi:</p>
                <p className="">Donyorshayx N16, 9арж</p>
              </div>
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Telefon:</p>
                <p className="">+998(91) 788-17-77</p>
              </div>
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Kadastr raqami:</p>
                <p className="">1710137</p>
              </div>
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Chuqurlik sensori:</p>
                <p className="">11.65</p>
              </div>
            </div>
            <div className="px-3 border-b-[1px] border-[#b3b3b3]">
              <div className="flex justify-between text-[#5c5c5c] py-1">
                <p>Ma'lumotlar yangilanishi:</p>
                <p className="">Holatga qarab</p>
              </div>
            </div>
            <div className="px-3">
              <div className="py-1 flex justify-between text-[#5c5c5c]">
                <p>Dastur nomi:</p>
                <p className="">
                  Gidrogeokimyoviy parametrlarini o‘lchov qurilmasi
                </p>
              </div>
              <div className="py-1 flex justify-between text-[#5c5c5c]">
                <p>Dastur versiyasi:</p>
                <p className="">5.6.12</p>
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
