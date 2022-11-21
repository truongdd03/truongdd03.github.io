import App from './App.vue';
import { createApp } from 'vue';

// External components
import Notifications from '@kyvg/vue3-notification'
import PrimeVue from 'primevue/config';
import Timeline from 'primevue/timeline'

// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faCircleArrowDown, faBriefcase, faUpRightFromSquare, faFilePdf, faBars, faPaw } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

import './assets/main.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';

import './firebase.config';
import router from './router';
import { writeUserIP } from './utils';

const icons = [
    faGithub,
    faLinkedin,
    faDiscord,
    faEnvelope,
    faCircleArrowDown,
    faBriefcase,
    faUpRightFromSquare,
    faFilePdf,
    faBars,
    faPaw,
];

icons.forEach((icon) => library.add(icon));

const app = createApp(App).use(router);

const libraries = [
    Notifications,
    PrimeVue,
];

libraries.forEach((lib) => app.use(lib));

writeUserIP();

app.component('Timeline', Timeline);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
