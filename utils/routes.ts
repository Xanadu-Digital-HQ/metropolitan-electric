import type { Link } from '~/types/types';
import { URLS } from './constants';

type position = {
  pos: number;
};
export const routes: (Link & position)[] = [
  {
    state: 'normal',
    name: 'Home',
    path: URLS.HOME,
    pos: 0,
  },
  {
    state: 'subnavLink',
    name: 'Explore',
    subItems: [
      {
        name: 'About',
        path: URLS.ABOUT,
      },
      {
        name: 'Gallery',
        path: URLS.GALLERY,
      },
      {
        name: 'Services',
        path: URLS.SERVICES,
      },
    ],
    pos: 1,
  },
  {
    state: 'subnavLink',
    name: 'Other',
    subItems: [
      {
        name: 'Media Center',
        path: URLS.MEDIA,
      },
      {
        name: 'Blog',
        path: URLS.BLOG,
      },
      {
        name: 'Faq',
        path: URLS.FAQ,
      },
    ],
    pos: 3,
  },
  {
    state: 'button',
    name: 'Contact',
    path: URLS.CONTACT,
    pos: 4,
  },
];
