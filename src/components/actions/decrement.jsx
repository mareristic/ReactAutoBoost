import addTotals from "./addTotals";
import removeItem from "./removeItem";

const decrement = (id) => {
    return function (dispatch,getState) {
        const state = getState();
        const cart = state.cartReducer.cart;
        let tempCart = [...cart];
        const selectedroduct = tempCart.find(item => item.id ===id)

        const index = tempCart.indexOf(selectedroduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if(product.count === 0) {
            dispatch(removeItem(id));
        }else{
            product.total = product.count * product.price;
            dispatch({type: 'setCart', cart:[...tempCart]});
            dispatch(addTotals());
        }
    }
}
export default decrement;