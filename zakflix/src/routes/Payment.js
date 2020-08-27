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



const Payment = props => {
    const onSuccess = Payment => {
        console.log("payment reussi");
        const user = firebase.auth().currentUser;
        const dbRef = firebase.database().ref(`users/${user.uid}`);
        const now = new Date();
        const newDate = now.setDate(now.getDate() + 30);
        console.log('newDate', newDate);
        dbRef
            .set({ validUntil: newDate})
                .then(data => {
                    console.log('opération réussie',data);
                    props.history.push({ pathname: '/'})
                })
                .catch(e => {
                    console.log('error');
                })
}
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
