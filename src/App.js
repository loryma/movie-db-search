import React from "react";
import { Provider } from "react-redux";
import store from "store";
import routes from "./routes";
import "./App.css";

function App() {
  return <Provider store={store}>{routes}</Provider>;
}

export default App;
