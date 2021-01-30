import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store/index';

import BaseButton from './components/UI/BaseButton.vue';
import BaseContainer from './components/UI/BaseContainer.vue';
import BaseIconDesc from './components/UI/BaseIconDesc.vue';
import BaseLink from './components/UI/BaseLink.vue';
import BaseCard from './components/UI/BaseCard.vue';
import TheLogo from './components/UI/TheLogo.vue';

const app = createApp(App);
app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-container', BaseContainer);
app.component('base-icon-desc', BaseIconDesc);
app.component('base-link', BaseLink);
app.component('base-card', BaseCard);
app.component('the-logo', TheLogo);
app.mount('#app');
