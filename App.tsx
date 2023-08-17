import * as React from "react";
import Navigation from "./navigations/stackNavigation";
import { Provider } from "react-redux";
import store from "./store";

export default function Main() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
