import React from 'react';
import firebase from 'firebase';

import { Paypal } from '../components';

const client = {
    sandbox: "AUeu7IxLdocBYRHL7LhezyaNINTCZwob-fOyZSCtFc7RjgOF2Q0HyWXj_Wafh81M3_LbowonvTgqvcSu",
    production: "xxxxxx"
}

const env = process.env.NODE_ENV === "production" ? "production": "sandbox";

const total = 100;

const currency = "EUR";

const onError = (error) => {
    console.log('erreur',error);
}

const onCancel = data => console.log('payment annulé', data);

const onSuccess = Payment => {
    console.log("payment reussi")
}

const Payment = props => {
    return(
        <Paypal 
            env={env}
            client={client}
            total={total}
            currency={currency}
            onError={onError}
            onCancel={onCancel}
            onSuccess={onSuccess}
        />
    )
}

export { Payment };
