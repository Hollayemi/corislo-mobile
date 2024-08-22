import { useContext } from "react";
import { StoreDataContext } from "../context/storeContext";
const { DataContext } = require("../context/userContext");

export const useUserData = () => useContext(DataContext);
export const useStoreData = () => useContext(StoreDataContext);
