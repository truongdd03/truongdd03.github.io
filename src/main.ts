import { createApp } from "vue";
import App from "./App.vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

import "./assets/main.css";

library.add(faGithub);
library.add(faLinkedin);
library.add(faDiscord);
library.add(faEnvelope);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
