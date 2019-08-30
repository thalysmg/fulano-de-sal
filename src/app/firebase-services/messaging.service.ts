import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class MessagingService{

    currentMessage = new BehaviorSubject(null);

    constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, 
        private afMessaging: AngularFireMessaging){

    }

    updateToken(userId, token){
        this.afAuth.authState.pipe(take(1)).subscribe(
            () => {
                const data = {}
                data[userId] = token
                this.db.collection('fcmTokens').doc(token).set(data)
                .then((res) => {
                    console.log('Token adicionado com sucesso');
                })
                .catch(err => {
                    console.log('erro ao enviar token ao db');
                    console.log(err);
                })
            }
        )
    }

    requestPermission(userId){
        this.afMessaging.requestToken.subscribe(token => {
                console.log(token);
                this.updateToken(userId, token);                
            },
            (err) => {
                console.log('Unable to get permission to notify.', err);
            }
        )
    }


    receiveMessage(){
        this.afMessaging.messages.subscribe(payload => {
            console.log('new message received', payload);
            this.currentMessage.next(payload);
        })
    }
}