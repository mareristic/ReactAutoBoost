const handleDetails = (id) => {
    return function (dispatch,getState) {
        const getItem = id => {
            const state = getState();
            const product = state.productsReducer.products.find(item => item.id === id)
            return product;
        }
            const product = getItem(id);
            return dispatch({type: 'setDetailsReducer', allDetails:product});
    }
}
export default handleDetails;