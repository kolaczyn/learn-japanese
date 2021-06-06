import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './pages/LandingPage.vue';
import SignUp from './pages/SignUp.vue';
import LogIn from './pages/LogIn.vue';
import TheLearn from './pages/TheLearn.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage, meta: { title: 'Learn Japanese with Moshiro' } },
    { path: '/sign-up', component: SignUp, meta: { title: 'Sign Up | Moshiro' } },
    { path: '/log-in', component: LogIn, meta: { title: 'Log In | Moshiro' } },
    { path: '/learn', component: TheLearn, meta: { title: 'Moshiro' } },
    { path: '/:notFound(.*)', component: NotFound, meta: { title: '404 Not Found | Moshiro' } },
  ],
});

export default router;
