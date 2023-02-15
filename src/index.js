import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Redirect = ({url}) => {
  console.log(url);
  React.useEffect(() => {
     window.location.href = url;
  }, [url]);

  return <h5>Redirecting...</h5>;
};

export default function RootApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/dashboard" element={<Redirect url="https://dashboard.awap.acmatcmu.com"/>}/>
        <Route path="/view" element={<Redirect url="https://view.awap.acmatcmu.com"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);
