import Vue from 'vue';
import VueLodash from 'vue-lodash';
import get from 'lodash/get';

// name is optional
Vue.use(VueLodash, { name: 'custom', lodash: { get } });
