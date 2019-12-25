import {LIST_COURSE_PENDING} from "../../Action/type";

let initialState = {
    courseListPending: [],
}

const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_COURSE_PENDING: {
            state.courseListPending = action.payload;
            return {...state};
        }
        
        default: 
            return state;
    }
}

export default (CourseReducer);