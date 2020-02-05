import { LIST_USERS, LIST_USER_PENDING, LIST_USERS_PAGINATION, SEARCH_USER, FETCH_USER_SEARCH } from "../../Action/type"

let initialState = {
    userList: [],
    userListPending: [],
    currentPage: 1,
    userText: "",
    userSearch: [],
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

        case SEARCH_USER: {
            state.userText = action.payload;
            return {...state};
        }

        case FETCH_USER_SEARCH: {
            state.userSearch = action.payload;
            return {...state};
        }

        default: 
        return state;
    }
}

export default (UserReducer);