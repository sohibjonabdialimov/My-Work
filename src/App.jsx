import { Routes, Route } from "react-router-dom";
import { ComponentList } from "./router/ComponentList";


const App = () => {
  // console.log(import.meta.env.VITE_API_KEY);

  return (
    <Routes>
      {/* {ComponentList()} */}
      <Route path="/*" element={<ComponentList />} />
    </Routes>
  );
};

export default App;
