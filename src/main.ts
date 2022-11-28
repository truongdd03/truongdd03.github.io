import App from './App.vue';
import { createApp } from 'vue';

// External components
import Notifications from '@kyvg/vue3-notification'
import PrimeVue from 'primevue/config';
import Timeline from 'primevue/timeline'
import Markdown from 'vue3-markdown-it';

// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faCircleArrowDown, faBriefcase, faUpRightFromSquare, faFilePdf, faBars, faPaw } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faDiscord, faSpotify } from '@fortawesome/free-brands-svg-icons';

import './styles/main.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';

import './utils/firebase.config';
import './utils/spotify';

import router from './router';
import { initTracker } from './utils/tracker';

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
    faSpotify,
];

icons.forEach((icon) => library.add(icon));

const app = createApp(App).use(router);

const libraries = [
    Notifications,
    PrimeVue,
    Markdown,
];

libraries.forEach((lib) => app.use(lib));

initTracker();

app.component('Timeline', Timeline);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
