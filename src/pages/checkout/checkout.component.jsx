import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StipeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, total}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => 
        <CheckoutItem key={cartItem.id} cartItem={cartItem} /> 
      )
    }
    <div className='total'>
      <span>Total: ${total}</span>
    </div>
    {
      total !== 0
      ? (
        <div style={{textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline'}}>
          <p>Please use the following test credit card for Payment
          4242424242424242 - exp. date: any future date cvv: 111
          </p>
          <StipeCheckoutButton price={total}/>
        </div>
      )
      : null
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);