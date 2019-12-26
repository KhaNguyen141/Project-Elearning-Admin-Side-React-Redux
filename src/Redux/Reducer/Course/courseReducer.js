import {LIST_COURSE_PENDING, LIST_COURSE_ACCEPTED} from "../../Action/type";

let initialState = {
    courseListPending: [],
    courseListAccepted: [],
}

const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_COURSE_PENDING: {
            state.courseListPending = action.payload;
            return {...state};
        }

        case LIST_COURSE_ACCEPTED: {
            state.courseListAccepted = action.payload
            return {...state};
        }
        
        default: 
            return state;
    }
}

export default (CourseReducer);