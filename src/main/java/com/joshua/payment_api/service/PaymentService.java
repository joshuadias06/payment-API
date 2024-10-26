package com.joshua.payment_api.service;

import com.joshua.payment_api.entity.Payment;
import com.joshua.payment_api.repository.PaymentRepository;
import com.stripe.model.PaymentIntent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private StripeService stripeService;

    public Payment processPayment(Payment paymentRequest) {
        try {
            PaymentIntent paymentIntent = stripeService.createPayment(paymentRequest.getAmount(), paymentRequest.getCurrency());

            paymentRequest.setStatus(paymentIntent.getStatus());
            if (paymentIntent.getPaymentMethod() != null) {
                paymentRequest.setPaymentMethod(paymentIntent.getPaymentMethod());
            }

        } catch (Exception e) {
            paymentRequest.setStatus("FAILED");
        }
        return paymentRepository.save(paymentRequest);
    }

    public Payment getPaymentById(Long id) {
        Optional<Payment> payment = paymentRepository.findById(id);
        return payment.orElseThrow(() -> new RuntimeException("Pagamento não encontrado"));
    }
}
