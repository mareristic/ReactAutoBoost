import {storeProducts} from '../../data.js';
const setProducts = () => {
    return function (dispatch,getState) {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        })
        dispatch({type: 'setProductsReducer', products:tempProducts});
    }
}
export default setProducts;