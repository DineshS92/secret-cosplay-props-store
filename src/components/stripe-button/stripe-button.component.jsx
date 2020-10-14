import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StipeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;

  const onToken = token => {
    console.log(token);
    alert('Payment Done');
  }

  return(
    <StripeCheckout
    label='Pay Now'
    name='Test Store'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your Total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey} />
  );
};

export default StipeCheckoutButton;