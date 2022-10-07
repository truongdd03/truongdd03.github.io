import App from './App.vue';
import { createApp } from 'vue';
import Notifications from '@kyvg/vue3-notification'

// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

import './assets/main.css';

library.add(faGithub);
library.add(faLinkedin);
library.add(faDiscord);
library.add(faEnvelope);

const app = createApp(App);
app.use(Notifications);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
