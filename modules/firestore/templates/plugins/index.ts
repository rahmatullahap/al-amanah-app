import Vue from 'vue';
import { Plugin } from '@nuxt/types';
import { FirestoreClient } from './firestore';

const firestoreApiPlugin: Plugin = async (ctx, inject) => {
  // configurations
  const firebaseConfig = '<%= options.firebaseConfig %>';

  // configure clients
  const firestoreClient = new FirestoreClient({
    firebaseConfig
  });
  const client = await firestoreClient.createFirestoreClient();

  // inject edge central helper functions
  ctx.$firestore = client;
  ctx.app.$firestore = client;
  Vue.prototype.$firestore = client;

  // inject into vue hooks
  inject('$firestore', client);
};

export default firestoreApiPlugin;
