import { combineReducers } from "redux";

// Admin
import AdminReducer from "./User/adminReducer";

const RootReducer = combineReducers({
  //toàn bộ state

  adminReducer: AdminReducer,
});

export default RootReducer;
