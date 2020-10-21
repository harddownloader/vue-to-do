import Vue from 'vue';
import Vuetify, { UserVuetifyPreset } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const opts: Partial<UserVuetifyPreset> = {
  theme: { dark: true },
};

export default new Vuetify(opts);
