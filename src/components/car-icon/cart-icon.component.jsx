import React from 'react';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
 

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingCartIcon className='shopping-icon'/>
    <span className='item-count'>{0 + itemCount}</span>
  </div>
)

const mapDispatchtoProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchtoProps)(CartIcon);