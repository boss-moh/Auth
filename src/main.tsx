import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { ReactQueryLib } from "@/lib";
import { AuthProdiver } from "@/context";
import { Toaster } from "@/components";
import App from "./App";
import "./index.css";

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
