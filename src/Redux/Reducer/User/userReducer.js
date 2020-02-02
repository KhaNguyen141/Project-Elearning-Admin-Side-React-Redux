import { LIST_USERS, LIST_USER_PENDING, LIST_USERS_PAGINATION } from "../../Action/type"

let initialState = {
    userList: [],
    userListPending: [],
    currentPage: 1,
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_USERS: {
            state.userList = action.payload;
            return {...state};
        }

        case LIST_USERS_PAGINATION: {
            state.currentPage = action.payload;
            return {...state};
        }

        case LIST_USER_PENDING: {
            state.userListPending = action.payload;
            return {...state};
        }

        default: 
        return state;
    }
}

export default (UserReducer);