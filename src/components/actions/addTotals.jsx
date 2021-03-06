const addTotals = (id) => {
    return function (dispatch,getState) {
        const state = getState();
        const cart = state.cartReducer.cart;
        let subTotal = 0;
        cart.map(item => (subTotal += item.total))
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        dispatch({type: 'setCart', cartSubTotal:subTotal,cartTax:tax,cartTotal:total});
    }
}
export default addTotals;