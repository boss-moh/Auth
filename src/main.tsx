import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { ReactQueryLib } from "@/lib";
import App from "./App";
import { AuthProdiver } from "./context/Auth";
import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryLib>
      <BrowserRouter>
        <AuthProdiver>
          <App />
          <Toaster />
        </AuthProdiver>
      </BrowserRouter>
    </ReactQueryLib>
  </StrictMode>
);
