const initialState = {
    allDetails: [],
}
const detailsReducer = (state = initialState,{ type, ...rest }) => {
    switch (type) {
        case 'setDetailsReducer':
            return {...state, ...rest };
        default:
            return state
    }
}
export default detailsReducer;
