import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import closeModal from './actions/closeModal';
import { ButtonComponent } from './Button';
function Modal() {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modalReducer);
    const modalOpen = modal.modalOpen;
    const {img ,title, price} = modal.modalProduct;
    return (
        <div className="container py-5">
           {!modalOpen?null:
                <ModalContainer>
                    <div className="container">
                        <div className="row">
                            <div id="modal" className="col-8 mx-auto col-d-6 col-lg-4 text-center text-capitalize p-5">
                                <h5 className="pb-2"> item added to the cart</h5>
                                <img src={img} className="img-fluid" alt="product"/>
                                <h5>{title}</h5>
                                <h5 className="text-muted">price: $ {price}</h5>
                                <Link to='/'>
                                    <ButtonComponent onClick={()=>dispatch(closeModal())}>
                                        shop
                                    </ButtonComponent>
                                </Link>
                                <Link to='/cart'>
                                    <ButtonComponent cart onClick={()=>dispatch(closeModal())}>
                                        go to cart
                                    </ButtonComponent>
                                </Link>       
                            </div>
                        </div>
                    </div>
                </ModalContainer>
           }
        </div>
    );
  }
  export default Modal;

  const ModalContainer = styled.div`
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,0.3);
  display:flex;
  align-items: center;
  justify-content: center;
  #modal{
      background:var(--mainWhite);
  }
  `

  