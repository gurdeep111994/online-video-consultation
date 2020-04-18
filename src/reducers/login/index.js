
import {
    LOGIN_STATUS
} from "../../actionCreators/index";

const initialState = {
    userInfo: {email:""}
};

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_STATUS:
            return {
                ...state,
                userInfo:action.payload
            }
        default:
            return state;
    }
}

export default loginReducer;