import { combineReducers } from "redux";

// Admin
import AdminReducer from "./User/userReducer";

const RootReducer = combineReducers({
  //toàn bộ state

  adminReducer: AdminReducer,
});

export default RootReducer;
