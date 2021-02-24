import { getPostData } from './utils/getPostData.js';
import { getParams } from './utils/getParams.js';
import { pathToRegex } from './utils/pathToRegex.js';
import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import PostView from './views/PostView.js';
import Settings from './views/Settings.js';

const router = async () => {
  const routes = [
    {
      path: '/',
      view: Dashboard,
    },
    {
      path: '/posts',
      view: Posts,
      type: 'posts',
    },
    {
      path: '/posts/:id',
      view: PostView,
      type: 'posts',
    },
    {
      path: '/settings',
      view: Settings,
    },
  ];

  const matches = routes.map((route) => {
    return {
      route,
      result: location.pathname.match(pathToRegex(route.path)),
      type: route.type,
    };
  });

  let match = matches.find((m) => m.result !== null);

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const params = getParams(match);
  let data;

  if (match.type === 'posts') {
    data = await getPostData(params.id || '');
  }

  const view = new match.route.view({ params, data });

  document.querySelector('#app').innerHTML = await view.getHTML();
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
