import { Middleware } from '@nuxt/types';

const authorized: Middleware = (ctx) => {
  // get token from backend
  const ok = localStorage.getItem('backend/config');
  if (!ok) {
    return ctx.redirect('/login');
  }
};

export default authorized;
