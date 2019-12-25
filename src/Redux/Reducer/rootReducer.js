import { combineReducers } from "redux";

import AdminReducer from "./User/adminReducer";
import CourseReducer from "./Course/courseReducer";
import UserReducer from "./User/userReducer";

const RootReducer = combineReducers({
  //toàn bộ state

  adminReducer: AdminReducer,
  courseReducer: CourseReducer,
  userReducer: UserReducer,
});

export default RootReducer;
