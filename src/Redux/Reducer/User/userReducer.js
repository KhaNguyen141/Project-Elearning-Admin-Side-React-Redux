import { ADMIN_LOGIN, ADMIN_UPDATE_USER} from "../../Action/type";

let initialState = {
  credentials: "",
  profileUpdate: [],

};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN: {
        state.credentials = action.payload;
        return {...state};
    }

    case ADMIN_UPDATE_USER: {
      state.profileUpdate = action.payload;
      return {...state};
    }

    default:
      return state;
  }
};

export default AdminReducer;
