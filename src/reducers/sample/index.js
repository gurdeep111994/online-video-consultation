
import {
    FETCH_DATA
} from "../../actionCreators/index";

const initialState = {
    list:null
};

const SampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA: {
            return {
                ...state,
                list: action.payload
            };
        }
        default:
            return state;
    }
}
export default SampleReducer;