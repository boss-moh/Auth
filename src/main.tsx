import "./index.css";
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { ReactQueryLib } from "@/lib";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <ReactQueryLib>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReactQueryLib>
);
{
  /* <StrictMode>
</StrictMode> */
}
