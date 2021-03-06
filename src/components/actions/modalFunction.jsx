const openModal = (id) => {
    return function (dispatch,getState) {
        const getItem = id => {
            const state = getState();
            const product = state.productsReducer.products.find(item => item.id === id)
            return product;
        }
            const product = getItem(id);
            return dispatch({type: 'setModal', modalProduct:product,modalOpen:true});
    }
}
export default openModal;