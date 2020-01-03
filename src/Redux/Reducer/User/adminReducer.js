import { ADMIN_LOGIN, ADMIN_UPDATE_USER, ADMIN_APPROVE_COURSE, ADMIN_ADD_NEW_COURSE, ADMIN_CANCEL_COURSE, ADMIN_UPDATE_COURSE, ADMIN_UPLOAD_IMAGE, ADMIN_ADD_USER, FETCH_USER_TYPE} from "../../Action/type";

let initialState = {
  credentials: "",
  profileUpdate: [],
  courseAccepted: [],
  courseCanceled: [],
  courseUpdate: [],
  newCourse: [],
  image: [],
  userType: [],
  user: [],

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

    case ADMIN_APPROVE_COURSE: {
      state.courseAccepted = action.payload;
      return {...state};
    
    }

    case ADMIN_CANCEL_COURSE: {
      state.courseCanceled = action.payload;
      return {...state};
    
    }

    case ADMIN_UPDATE_COURSE: {
      
      state.courseUpdate = action.payload;
      return {...state};
    
    }

    case ADMIN_UPLOAD_IMAGE: {
      state.image = action.payload;
      return {...state};
    }

    case ADMIN_ADD_NEW_COURSE: {
      state.newCourse = action.payload;
      return {...state};
    }

    case FETCH_USER_TYPE: {
      state.userType = action.payload;
      return {...state};
    }

    case ADMIN_ADD_USER: {
      state.user = action.payload;
      return {...state};
    }

    default:
      return state;
  }
};

export default AdminReducer;
