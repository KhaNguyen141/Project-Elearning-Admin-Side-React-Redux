import { combineReducers } from "redux";

// User
import AdminReducer from "./Admin/adminReducer";

const RootReducer = combineReducers({
  //toàn bộ state
  adminReducer: AdminReducer,
});

export default RootReducer;
