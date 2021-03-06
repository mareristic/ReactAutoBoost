import addTotals from "./addTotals";
import setProducts from "./setProducts";

const removeItem = (id) => {
    return function (dispatch,getState) {
        const getItem = id => {
            const state = getState();
            const product = state.productsReducer.products.find(item => item.id === id)
            return product;
        }

        const state = getState();
        const cart = state.cartReducer.cart;
        const products = state.productsReducer.products;
        
        let tempProducts = [...products];
        let tempCart = [...cart];

        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        dispatch({type: 'setCart', cart:[...tempCart]});
        dispatch({type: 'setProductsReducer', products:[...tempProducts]});
        dispatch(addTotals());
    }
}
export default removeItem;