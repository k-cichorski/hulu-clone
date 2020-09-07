export const initialState = {
    moreInfo: false
};

export const SET_MOREINFO = 'SET_MOREINFO';
export const CLEAR_MOREINFO = 'CLEAR_MOREINFO';

function reducer(state, action) {
    switch(action.type){
        case SET_MOREINFO:
            return {
                ...state,
                moreInfo: action.payload
            }

        case CLEAR_MOREINFO:
            return {
                ...state,
                moreInfo: false
            }

        default:
            return state;
    }
}

export default reducer;
