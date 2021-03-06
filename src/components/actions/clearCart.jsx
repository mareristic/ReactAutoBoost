import setProducts from "./setProducts";

const clearCart = () => {
    return function (dispatch,getState) {
        console.log('clear Cart1');
        dispatch({type: 'setCart', cart:[]});
        dispatch(setProducts());
    }
}
export default clearCart;