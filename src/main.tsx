import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./output.css";
import { NavbarComponent } from "./components/navbar.tsx";
import { FooterComponent } from "./components/footer-component.tsx";
import "flowbite";
import { DepartmentModalContextProvider } from "./context/department-modal-context.tsx";
import { SCModalContextProvider } from "./context/sc-modal-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavbarComponent />
    <SCModalContextProvider>
      <DepartmentModalContextProvider>
        <App />
      </DepartmentModalContextProvider>
    </SCModalContextProvider>
    <FooterComponent />
  </React.StrictMode>
);
