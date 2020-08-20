import { initializeApp } from 'firebase';

export const initFirebase = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyDvpAKAXKgW3SzYASyH876LwPdFIBzXiZw",
        authDomain: "mini-netflix-e7ba1.firebaseapp.com",
        databaseURL: "https://mini-netflix-e7ba1.firebaseio.com",
        projectId: "mini-netflix-e7ba1",
        storageBucket: "mini-netflix-e7ba1.appspot.com",
        messagingSenderId: "132312971716",
        appId: "1:132312971716:web:be57f3de4d9fe577e2cc91"
    };

    initializeApp(firebaseConfig);
}