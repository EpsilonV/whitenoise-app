import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('../components/Home');
const Settings = () => import('../components/Settings/Settings');
const SoundMixed = () => import('../components/SoundMixed/SoundMixed');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    {
      path: 'sounds',
      name: 'sounds',
      component: SoundMixed,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
