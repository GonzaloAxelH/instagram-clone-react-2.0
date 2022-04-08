import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { db } from "./lib/firebase";

import "./styles/app.css";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <FirebaseContext.Provider value={{ db }}>
    <App />
  </FirebaseContext.Provider>
);
