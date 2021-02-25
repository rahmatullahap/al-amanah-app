import firebase from 'firebase';

export interface FirestoreClientConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export class FirestoreClient {
  /* eslint-disable no-useless-constructor */
  constructor(private config: FirestoreClientConfig) {}

  createFirestoreClient(): firebase.firestore.Firestore {
    try {
      firebase.initializeApp(this.config);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    const db = firebase.firestore();
    return db;
  }
}
