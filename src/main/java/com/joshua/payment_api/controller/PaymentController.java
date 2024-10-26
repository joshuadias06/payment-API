package com.joshua.payment_api.controller;

import com.joshua.payment_api.entity.Payment;
import com.joshua.payment_api.service.PaymentService;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Map;

@RestController
@RequestMapping("/payments")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping
    public ResponseEntity<Payment> processPayment(@RequestBody Map<String, Object> paymentRequest) {
        BigDecimal amount = new BigDecimal((Integer) paymentRequest.get("amount"));
        String currency = (String) paymentRequest.get("currency");


        Payment payment = new Payment();
        payment.setAmount(amount);
        payment.setCurrency(currency);


        Payment processedPayment = paymentService.processPayment(payment);

        return ResponseEntity.ok(processedPayment);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Payment> getPaymentById(@PathVariable Long id) {
        Payment payment = paymentService.getPaymentById(id);
        return ResponseEntity.ok(payment);
    }
}
