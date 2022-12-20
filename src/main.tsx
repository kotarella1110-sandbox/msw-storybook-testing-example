import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const workerStart = async () => {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");
    worker.start();
  }
};

workerStart().then(() => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
