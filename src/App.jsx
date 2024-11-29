import { Routes, Route, useNavigate } from "react-router-dom";
import { ComponentList } from "./router/ComponentList";
import LoginPage from "./views//auth/LoginPage";
import LoginLayout from "./layout/AuthLayout";
import { useEffect } from "react";
import { verifyToken } from "./services/verifyToken";

const App = () => {
  const navigate = useNavigate();
  // console.log(import.meta.env.VITE_API_KEY);
  useEffect(() => {
    verifyToken(navigate);
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginLayout>
            <LoginPage />
          </LoginLayout>
        }
      />
      {/* {ComponentList()} */}
      <Route path="/*" element={<ComponentList />} />
    </Routes>
  );
};

export default App;
