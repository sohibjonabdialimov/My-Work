import "./home.css";

const data = [
  {
    id: 1,
    time: "20-may 2024-yil, 11:31",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    id: 2,
    time: "20-may 2024-yil, 11:30",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    id: 3,
    time: "20-may 2024-yil, 11:29",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    id: 4,
    time: "20-may 2024-yil, 11:28",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    id: 5,
    time: "20-may 2024-yil, 11:27",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
  {
    id: 6,
    time: "20-may 2024-yil, 11:26",
    sath: "240,0",
    temperature: "24,0",
    salinity: "125,0",
    potash: "12,0",
  },
];
const HomePage = () => {
  return (
    <div className="py-6">
      <h1 className="mb-10 font-semibold mt-10">Quduqning ko'rsatgichlari</h1>
      <table className="container">
        <thead>
          <tr>
            <th>
              <h1>O'lchangan vaqti</h1>
            </th>
            <th>
              <h1>Suv sathi, (sm)</h1>
            </th>
            <th>
              <h1>Temperatura, (0&#176;C)</h1>
            </th>
            <th>
              <h1>Sho'rlanganligi, (TDS)</h1>
            </th>
            <th>
              <h1>Ishqor miqdori, (pH)</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.time}</td>
                <td>{item.sath}</td>
                <td>{item.temperature}</td>
                <td>{item.salinity}</td>
                <td>{item.potash}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
};

export default HomePage;
