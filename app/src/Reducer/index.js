import FETCH_START from '../actions';
import FETCH_SUCCESS from '../actions';
import FETCH_FAIL from '../actions';

const initialState = {
    isLoading: false,
    err: null,
    facts: []
}

const Reducer = () => (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            };
            case FETCH_SUCCESS:  
                return {
                    err: null,
                    facts: action.payload,
                    isLoading: false
                };
                case FETCH_FAIL:   
                    return {
                        ...state,
                        err: action.payload,
                        isLoading: false
                    }
        default:
            return state
    }
}

export default Reducer; 
