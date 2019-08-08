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

/*
    Funcao chamada no momento em que um novo usuario faz o registro no webapp
*/
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

/* Adiciona algumas informações relevantes (timestamp e disponibilidade) ao criar um novo cardapio */
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

/* 
    Funcao chamada ao criar um novo item na seçao de bebidas/sobremesas:
    Se o item não tiver preco, é adicionado um preço padrão de 0.00
*/
exports.createItem = functions.firestore.document('sections/{sectionId}').onUpdate((snap, context) => {
    if(context.params.sectionId === 'Bebidas' || context.params.sectionId === 'Sobremesas'){
        var currentItems = snap.after.data().opcoes;
        notAllHavePrice = currentItems.some((item) => {return typeof item.unitPrice === "undefined";}) //Indica se todos os items tem a prop. 'unitPrice'
        if(notAllHavePrice){
            currentItems.forEach((item) => {
                if((typeof item.unitPrice) === "undefined"){
                    item.unitPrice = 0.00;
                    console.log('Item antes sem preço teve seu preço atualizado.');
                }
            })
            firestore.collection('sections').doc(context.params.sectionId).set({
                opcoes: currentItems
            }, {merge: true})
            .then(res => {
                console.log('Itens antes sem preço atualizados com sucesso');
                return res;                
            })
            .catch(err => {
                console.log('Erro ao atualizar itens sem preços: ');
                console.log(err);
            })         
        }
    }
})

