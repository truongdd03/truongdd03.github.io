import App from './App.vue';
import { createApp } from 'vue';

// External components
import PrimeVue from 'primevue/config';
import Markdown from 'vue3-markdown-it';
import ToastService from 'primevue/toastservice';
import AnimateOnScroll from 'primevue/animateonscroll';

// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faCircleArrowDown, faBriefcase, faUpRightFromSquare, faFilePdf, faBars, faPaw, faArrowAltCircleLeft, faArrowAltCircleRight, faPlay, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faDiscord, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons';

import 'primevue/resources/themes/mdc-dark-indigo/theme.css';
import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import './utils/firebase.config';

import '@/style/main.css';

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
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faInstagram,
    faPlay,
    faQuoteLeft,
    faQuoteRight
];

icons.forEach((icon) => library.add(icon));

initTracker();

const app = createApp(App).use(router);

const libraries = [
    ToastService,
    PrimeVue,
    Markdown,
];

libraries.forEach((lib) => app.use(lib));

app.directive('animateonscroll', AnimateOnScroll);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
