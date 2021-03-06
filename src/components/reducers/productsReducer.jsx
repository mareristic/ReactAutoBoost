const initialState = {
    products: [],
}
const productsReducer = (state = initialState,{ type, ...rest }) => {
    switch (type) {
        case 'setProductsReducer':
            return {...state, ...rest };
        default:
            return state
    }
}
export default productsReducer;
