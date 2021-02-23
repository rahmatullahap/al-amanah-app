import { CACHE_VERSION } from '~/nuxt.config';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const worker of registrations) {
      // delete older version of cache
      worker.active.addEventListener('statechange', (activateEvent: any) => {
        activateEvent.waitUntil(
          caches.keys().then((keyList) =>
            Promise.all(
              keyList.map((key) => {
                if (key !== `workbox-runtime-${CACHE_VERSION}`) {
                  // eslint-disable-next-line no-console
                  console.log('deleting key', key);
                  return caches.delete(key);
                }
              })
            )
          )
        );
      });
    }
  });
}
