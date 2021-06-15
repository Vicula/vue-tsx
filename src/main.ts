/**
 * Vite Shell Init Script
 * ------------------------------------------------------------------------------
 * A file that inits a vue shell and adds components for
 * site building
 *
 * current features:
 *  - NONE
 *
 * @namespace ViteShell
 */

import { createApp } from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";

const data = fetch(
  "https://raw.githubusercontent.com/RepZio/TestApplication/master/test.json"
);

console.log(data);

createApp(App).use(router).use(store).mount("body");
