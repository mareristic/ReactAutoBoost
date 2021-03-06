const closeModal = () => {
    return function (dispatch,getState) {
        return dispatch({type: 'setModal',modalOpen:false});
    }
}
export default closeModal;