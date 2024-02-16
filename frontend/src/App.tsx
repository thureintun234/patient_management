import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import PrivateRoute from "./routes/PrivateRoute";
import { Toaster } from "react-hot-toast";
import LoginForm from "./pages/auth";
import { SWRConfig } from "swr";

function App() {
  return (
    <SWRConfig
      value={{
        revalidateIfStale: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      <Router>
        <Routes>
          <Route path="/auth/login" element={<LoginForm />} />
          <Route path="/*" element={<PrivateRoute />} />
        </Routes>
      </Router>
      <Toaster
        position="top-right"
        containerStyle={{
          top: 100,
        }}
        toastOptions={{
          duration: 4000,
          style: {
            color: "white",
          },
          success: {
            style: {
              background: "lightgreen",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
    </SWRConfig>
  );
}

export default App;
