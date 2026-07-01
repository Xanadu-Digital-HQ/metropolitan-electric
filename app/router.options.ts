import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 120,
        behavior: 'smooth',
      };
    }

    if (to.fullPath !== from.fullPath) {
      return {
        top: 0,
        left: 0,
      };
    }

    return false;
  },
};
