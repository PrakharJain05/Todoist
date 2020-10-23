import React, { StrictMode } from "react";
import { render } from "react-dom";
import { App } from "./App";
import { TaskContextProvider } from "./context/taskContext";

render(
  <TaskContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TaskContextProvider>,
  document.getElementById("root")
);
