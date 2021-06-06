import { createApp } from 'vue';
import firebase from 'firebase/app';

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

const firebaseConfig = {
  apiKey: 'AIzaSyDcHICfizybCuD8C2bHe-0A8VI28HvKzY0',
  authDomain: 'learn-japanese-79a98.firebaseapp.com',
  projectId: 'learn-japanese-79a98',
  storageBucket: 'learn-japanese-79a98.appspot.com',
  messagingSenderId: '385440156079',
  appId: '1:385440156079:web:62d1d00b96873a437b875a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
