import HomePage from "./Pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage2 from "./Pages/HomePage2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/dashboard";
import Billing from "./Pages/billing";
import News from "./Pages/news";
import Settings from "./Pages/settings";
import Login from "./Pages/login";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/store" element={<HomePage2 />}></Route>
        <Route
          path="/dashboard"
          element={
            <Dashboard sidebar={sidebar} setSidebar={setSidebar} />
          }></Route>
        <Route path="/billing" element={<Billing />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
