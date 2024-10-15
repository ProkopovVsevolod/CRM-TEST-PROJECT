import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App";
import { HookFormProvider } from "./core/helpers/HookFormProvider";

const root = document.getElementById("root");

if (!root) {
  throw new Error("crmApp root not found");
}

const container = createRoot(root);

container.render(
  <HookFormProvider>
    <App />
  </HookFormProvider>
);

if ((module as any).hot) {
  (module as any).hot.accept();
}
