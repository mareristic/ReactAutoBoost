import addTotals from "./addTotals";

const addToCart = (id) => {
    return function (dispatch,getState) {
        const getItem = id => {
            const state = getState();
            const product = state.productsReducer.products.find(item => item.id === id)
            return product;
        }
        console.log(id)
        const state = getState();
        const products = state.productsReducer.products;
        const cart = state.cartReducer.cart;
        let tempProducts = [...products];
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        dispatch({type: 'setProductsReducer', products:tempProducts});
        dispatch({type: 'setCart', cart:[...cart,product]});
        dispatch(addTotals())
    }
}
export default addToCart;