import React, { useState } from 'react';
import './App.css';
import Cards from 'react-credit-cards'; // Importa a biblioteca de cartões
import 'react-credit-cards/es/styles-compiled.css'; // Estilo dos cartões

function App() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [issuer, setIssuer] = useState(''); // Para armazenar a bandeira do cartão

  // Função para determinar a bandeira do cartão com base no número
  const getCardIssuer = (number) => {
    const cardPatterns = {
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      mastercard: /^(?:5[1-5][0-9]{14})$/,
      amex: /^3[47][0-9]{13}$/,
      discover: /^(?:6011|65[0-9]{2}|64[4-9][0-9])[0-9]{12}$/,
    };

    for (const [issuer, pattern] of Object.entries(cardPatterns)) {
      if (pattern.test(number)) {
        return issuer;
      }
    }
    return '';
  };

  // Função para lidar com a submissão do formulário
  const handlePayment = async (e) => {
    e.preventDefault();

    const paymentData = {
      amount: parseInt(amount),
      currency: 'usd',
      cardNumber,
      expiryDate,
      cvv,
    };

    try {
      const response = await fetch('http://localhost:8080/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      const result = await response.json();
      console.log('Pagamento realizado com sucesso:', result);
    } catch (error) {
      console.error('Erro ao realizar pagamento:', error);
    }
  };

  // Atualiza a bandeira do cartão ao digitar
  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    setCardNumber(value);
    setIssuer(getCardIssuer(value)); // Atualiza a bandeira
  };

  return (
    <div className="payment-container">
      <Cards
        number={cardNumber}
        name="Nome do Titular"
        expiry={expiryDate}
        cvc={cvv}
        focused={''}
        issuer={issuer} // Define a bandeira do cartão
      />

      <form onSubmit={handlePayment} className="payment-form">
        <div className="input-group">
          <label htmlFor="amount">Valor</label>
          <input
            type="text"
            id="amount"
            placeholder="100.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="cardNumber">Número do Cartão</label>
          <input
            type="text"
            id="cardNumber"
            maxLength="19"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={handleCardNumberChange} // Usa a nova função para atualizar o número do cartão
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="expiryDate">Data de Validade</label>
          <input
            type="text"
            id="expiryDate"
            maxLength="5"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            maxLength="3"
            placeholder="123"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>

        <button type="submit" className="pay-button">Pagar</button>
      </form>
    </div>
  );
}

export default App;