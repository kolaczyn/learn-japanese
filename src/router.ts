import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './pages/LandingPage.vue';
import SignUp from './pages/SignUp.vue';
import LogIn from './pages/LogIn.vue';
import TheLearn from './pages/TheLearn.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/sign-up', component: SignUp },
    { path: '/log-in', component: LogIn },
    { path: '/learn', component: TheLearn },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
