import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={"lazy load..."}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
