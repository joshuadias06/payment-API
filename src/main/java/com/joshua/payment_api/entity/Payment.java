package com.joshua.payment_api.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.Date;

@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal amount;
    private String currency;
    private String paymentMethod;
    private String status;

    @Temporal(TemporalType.TIMESTAMP)
    private Date paymentDate;
}
