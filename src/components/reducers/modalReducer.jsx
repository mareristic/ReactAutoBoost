import {detailProduct} from "../../data.js";

const initialState = {
    modalOpen: false,
    modalProduct: detailProduct
}
const modalReducer = (state = initialState,{ type, ...rest }) => {
    switch (type) {
        case 'setModal':
            return {...state, ...rest };
        default:
            return state
    }
}
export default modalReducer;
