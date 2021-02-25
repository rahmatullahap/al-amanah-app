import { Middleware } from '@nuxt/types';
import firebase from 'firebase/app';
import 'firebase/auth';

const authorized: Middleware = (ctx) => {
  firebase.auth().onAuthStateChanged(function (retUser) {
    if (!retUser) {
      return ctx.redirect('/login');
    }
  });
};

export default authorized;
