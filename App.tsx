import * as React from "react";
import Navigation from "./navigations/stackNavigation";
import { Provider } from "react-redux";
import store from "./store";
import { SWRConfig } from "swr";
import { fetcher } from "./services/axios/fetcher";

export default function Main() {
  return (
    <Provider store={store}>
      <SWRConfig value={{ fetcher }}>
        <Navigation />
      </SWRConfig>
    </Provider>
  );
}
