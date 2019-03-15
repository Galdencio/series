import { SET_FIELD, SAVE_SERIE } from '../actions';

const INITIAL_STATE = {
    title: '',
    gender: 'police',
    rate: 0,
    img: '',
    description: ''
};

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_FIELD:
            const newState = { ...state };
            newState[action.field] = action.value;
            return newState;
        case SAVE_SERIE:
            return state;
        default:
            return state;
    }
}