import addTotals from "./addTotals";

const increment = (id) => {
    return function (dispatch,getState) {
        const state = getState();
        const cart = state.cartReducer.cart;
        let tempCart = [...cart];
        const selectedroduct = tempCart.find(item => item.id ===id)

        const index = tempCart.indexOf(selectedroduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;
        dispatch({type: 'setCart', cart:[...tempCart]});
        dispatch(addTotals());
    }
}
export default increment;