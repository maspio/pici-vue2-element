import Vue from "vue";
import vueCustomElement from "vue-custom-element";
import customElement from "./index.vue";

Vue.use(vueCustomElement);
Vue.customElement("pici-element", customElement, {});
