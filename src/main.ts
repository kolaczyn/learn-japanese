import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store/index';

import './assets/css/main.css';

import BaseButton from './components/common/BaseButton.vue';
import BaseHamburger from './components/common/BaseHamburger.vue';
import BaseContainer from './components/common/BaseContainer.vue';
import BaseIconDesc from './components/common/BaseIconDesc.vue';
import BaseLink from './components/common/BaseLink.vue';
import BaseCard from './components/common/BaseCard.vue';
import TheLogo from './components/common/TheLogo.vue';
import BaseExit from './components/common/BaseExit.vue';

const app = createApp(App);
app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-hamburger', BaseHamburger);
app.component('base-container', BaseContainer);
app.component('base-icon-desc', BaseIconDesc);
app.component('base-link', BaseLink);
app.component('base-card', BaseCard);
app.component('the-logo', TheLogo);
app.component('base-exit', BaseExit);
app.mount('#app');
