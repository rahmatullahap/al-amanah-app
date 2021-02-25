import firebase from 'firebase/app';
import 'firebase/firestore';

export interface FirestoreClientConfig {
  firebaseConfig: string;
}

export class FirestoreClient {
  /* eslint-disable no-useless-constructor */
  constructor(private config: FirestoreClientConfig) {}

  createFirestoreClient(): firebase.firestore.Firestore {
    try {
      firebase.initializeApp(JSON.parse(this.config.firebaseConfig));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    const db = firebase.firestore();
    return db;
  }
}
