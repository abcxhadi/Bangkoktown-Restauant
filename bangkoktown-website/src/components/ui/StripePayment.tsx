
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import { Button } from './Button';
import { STRIPE_PUBLIC_KEY } from '../../data/credentials';

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const CheckoutForm = ({ onPaymentSuccess }: { onPaymentSuccess: (paymentMethod?: any) => void }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState<any>(null);

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'AE',
        currency: 'aed',
        total: {
          label: 'Reservation Fee',
          amount: 2000, // 20 DHS in fils
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      pr.canMakePayment().then(result => {
        if (result) {
          setPaymentRequest(pr);
        }
      });
    }
  }, [stripe]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        onPaymentSuccess(paymentMethod);
      }
    }
  };

  if (paymentRequest) {
    paymentRequest.on('paymentmethod', async (ev: any) => {
      // Confirm the PaymentIntent without handling actions on the client.
      // Your server handles actions and tells you when the payment is complete.
      // We're simulating this part on the client for this example
      console.log('[PaymentMethod]', ev.paymentMethod);
      ev.complete('success');
      onPaymentSuccess(ev.paymentMethod);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {paymentRequest && <PaymentRequestButtonElement options={{ paymentRequest }} />}

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-600"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-gray-900/70 px-2 text-gray-400">Or pay with card</span>
        </div>
      </div>

      <CardElement 
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#fff',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#fa755a',
              iconColor: '#fa755a',
            },
          },
        }}
      />
      <Button type="submit" disabled={!stripe} className="w-full mt-4">
        Confirm & Pay 20 DHS
      </Button>
    </form>
  );
};

export const StripePayment = ({ onPaymentSuccess }: { onPaymentSuccess: (paymentMethod?: any) => void }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm onPaymentSuccess={onPaymentSuccess} />
    </Elements>
  );
};
