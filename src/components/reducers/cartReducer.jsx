const initialState = {
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
}
const cartReducer = (state = initialState,{ type, ...rest }) => {
    switch (type) {
        case 'setCart':
            return {...state, ...rest };
        default:
            return state
    }
}
export default cartReducer;
