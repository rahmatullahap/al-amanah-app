import Vue from 'vue';
import { Plugin } from '@nuxt/types';
import { FirestoreClient } from './firestore';

const firestoreApiPlugin: Plugin = async (ctx, inject) => {
  // configurations
  const apiKey = '<%= options.apiKey %>';
  const authDomain = '<%= options.authDomain %>';
  const projectId = '<%= options.projectId %>';
  const storageBucket = '<%= options.storageBucket %>';
  const messagingSenderId = '<%= options.messagingSenderId %>';
  const appId = '<%= options.appId %>';
  const measurementId = '<%= options.measurementId %>';

  // configure clients
  const firestoreClient = new FirestoreClient({
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
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
