import * as firebase from 'firebase';
import 'firebase/database';
import { firebaseConfig } from './fb-config';

export function initArticDB() {
  firebase.initializeApp(firebaseConfig);
}

export function storeArtic(item) {
  firebase.database().ref('historyData/').push(item);
}

export function setupArticListener(updateFunc) {
  firebase
    .database()
    .ref('articData/')
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