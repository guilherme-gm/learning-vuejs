import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Dashboard from './components/Dashboard.vue';
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';
import { firebaseApp } from "./firebaseApp";
import store from "./store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup }
  ]
});

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user);
    router.push('/dashboard'); // navigate to a new page, putting in top of history
  } else {
    if (router.currentRoute.path === '/signup') {
      router.replace('/signup');
    } else {
      router.replace('/signin'); // replaces the history with signin
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
