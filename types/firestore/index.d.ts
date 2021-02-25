import firebase from 'firebase/app';
import 'firebase/firestore';

export interface FirestoreClientConfig {
  firebaseConfig: string;
}

declare module 'vue/types/vue' {
  interface Vue {
    $firestore: firebase.firestore.Firestore;
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $firestore: firebase.firestore.Firestore;
  }
}
declare module '@nuxt/types' {
  interface Context {
    $firestore: firebase.firestore.Firestore;
  }
  interface Configuration {
    firestore: FirestoreClientConfig;
  }
}
