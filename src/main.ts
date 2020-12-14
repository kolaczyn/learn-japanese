import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import BaseButton from './components/UI/BaseButton.vue';
import BaseContainer from './components/UI/BaseContainer.vue';
import BaseIconDesc from './components/UI/BaseIconDesc.vue';
import BaseCard from './components/UI/BaseCard.vue';
import TheLogo from './components/UI/TheLogo.vue';

const app = createApp(App);
app.use(router);

app.component('base-button', BaseButton);
app.component('base-container', BaseContainer);
app.component('base-icon-desc', BaseIconDesc);
app.component('base-card', BaseCard);
app.component('the-logo', TheLogo);
app.mount('#app');
