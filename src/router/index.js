import {createRouter as createRouter, createWebHistory} from 'vue-router'
//import useStore from 'vuex'

//Import views
import AdminView from '../views/AdminView.vue';
import HomeView from '../views/HomeView.vue';
import OverlayView from '../views/OverlayView.vue';
import PlayerView from '../views/PlayerView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/overlay',
    name: 'overlay',
    component: OverlayView,
  },
  {
    path: '/player',
    name: 'player',
    component: PlayerView,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});


export default router;
