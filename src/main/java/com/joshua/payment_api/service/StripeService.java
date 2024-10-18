package com.joshua.payment_api.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class StripeService {

    public StripeService() {
        Stripe.apiKey = "sua-chave-secreta-stripe";
    }

    public PaymentIntent createPayment(BigDecimal amount, String currency) throws StripeException {
        PaymentIntentCreateParams.Builder paramsBuilder = PaymentIntentCreateParams.builder()
                .setAmount(amount.multiply(BigDecimal.valueOf(100)).longValue()) // Valor em centavos
                .setCurrency(currency);
        paramsBuilder.addPaymentMethodType("card");

        PaymentIntentCreateParams params = paramsBuilder.build();

        return PaymentIntent.create(params);
    }
}
