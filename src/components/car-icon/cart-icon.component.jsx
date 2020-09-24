import React from 'react';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';


const CartIcon = ({toggleCartHidden}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingCartIcon className='shopping-icon'/>
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchtoProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchtoProps)(CartIcon);