import { createApp } from 'vue';
import App from './App.vue';

import BaseButton from './components/UI/BaseButton.vue';
import BaseContainer from './components/UI/BaseContainer.vue';
import BaseIconDesc from './components/UI/BaseIconDesc.vue';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-container', BaseContainer);
app.component('base-icon-desc', BaseIconDesc);
app.mount('#app');
