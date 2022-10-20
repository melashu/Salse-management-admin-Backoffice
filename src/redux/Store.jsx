import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import rootreducer from "./rootreducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
const config = {
  key: "admin",
  storage,
};

const adminReducer = persistReducer(config, rootreducer);
const store = configureStore({ reducer: { admin: adminReducer } });
const persistStores = persistStore(store);

export { persistStores };
export default store;
