import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('sua-chave-publica-stripe');

const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    
    const { error, paymentIntent } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Erro ao processar o pagamento:', error);
    } else {
      console.log('Pagamento realizado com sucesso:', paymentIntent);
      // Aqui você pode enviar `paymentIntent` para o seu backend, se necessário
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Valor</label>
        <input
          type="text"
          id="amount"
          placeholder="100.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pagar</button>
    </form>
  );
};

const App = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default App;
