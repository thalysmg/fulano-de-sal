const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp()
const firestore = admin.firestore();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.registerUser = functions.auth.user().onCreate((user, context) => {
    userData = {
        email: user.email,
        photoUrl: user.photoURL,
        roles: ['customer'] //Customer its an default role for any user created
    }
    firestore.collection('users').doc(user.uid).create(userData)
    .then(res => {
        console.log('User successfully created!');
        console.log(res);
        return res;
    })
    .catch(err => {
        console.log('Error while creating user.');
        console.log(err)
    })
})

exports.createMenu = functions.firestore.document('menu/{menuId}').onCreate((snap, context) => {
    const menuValue = snap.data();
    menuValue.timestamp = Date.now();
    menuValue.available = false;
    firestore.collection('menu').doc(context.params.menuId).set(menuValue)
    .then(res => {
        console.log('Menu criado com sucesso!');
        console.log(res);
        return res;
    })
    .catch(err => {
        console.log('Erro ao atualizar timestamp e disponibilidade do menu');
        console.log(err);
    })
})


