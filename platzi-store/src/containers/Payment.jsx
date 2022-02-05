import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import '../styles/components/Payment.css';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useTotalCartSum } from '../hooks/useTotalSumCart';
const Payment = () => {
  const { state, addNewOrder } = React.useContext(AppContext);
  const { cart, buyer } = state;
  const cartSum = useTotalCartSum();
  const navigate = useNavigate();

  const paypalOptions = {
    clientId: process.env.PAYPAL_CLIENT_ID,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };
  const handlePaymentSucces = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => {
          return (
            <div className="PaymentItem" key={item.title}>
              <div className="payment-element">
                <h4>{item.title}</h4>
                <span>{item.price}</span>
              </div>
            </div>
          );
        })}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={cartSum}
            onClick={() => console.log('start payment')}
            onSuccess={(data) => handlePaymentSucces(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export { Payment };
