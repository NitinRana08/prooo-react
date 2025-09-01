import React from "react";
import { createRoot } from "react-dom/client";  // ✅ using createRoot directly
import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));  // ✅ no ReactDOM needed

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
