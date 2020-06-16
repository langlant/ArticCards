import * as firebase from 'firebase';
import 'firebase/database';
import { firebaseConfig } from './fb-config';

export function initArticDB() {
  firebase.initializeApp(firebaseConfig);
}

export function storeArtic(item) {
  firebase.database().ref('articCards/').push(item);
}

export function updateArtic(item){
  const key = item.id;
  delete item.id;
  firebase.database().ref(`articCards/${key}`).set(item);
}

export function retrieveArtic(item){
  
}

export function setupArticListener(updateFunc) {
  firebase
    .database()
    .ref('articCards/')
    .on('value', (snapshot) => {
      if (snapshot?.val()) {
        const fbObject = snapshot.val();
        const newArr = [];
        Object.keys(fbObject).map((key, index) => {
          newArr.push({ ...fbObject[key], id: key });
        });
        updateFunc(newArr);
      } else {
        updateFunc([]);
      }
    });
} 