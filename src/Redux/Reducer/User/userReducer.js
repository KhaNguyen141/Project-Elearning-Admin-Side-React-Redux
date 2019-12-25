import { LIST_USERS } from "../../Action/type"

let initialState = {
    userList: [],
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_USERS: {
            state.userList = action.payload;
            return {...state};
        }

        default: 
        return state;
    }
}

export default (UserReducer);