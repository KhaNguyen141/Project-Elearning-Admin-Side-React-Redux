import { ADMIN_LOGIN, UPDATE_ADMIN_PROFILE} from "../../Action/type";

let initialState = {
  credentials: "",
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_LOGIN: {
        state.credentials = payload;
        return {...state}
    }

    case UPDATE_ADMIN_PROFILE: {
      state.credentials = payload;
      return {...state}
    }
    
    default:
      return state;
  }
};

export default UserReducer;
