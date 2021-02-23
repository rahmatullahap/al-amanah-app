import { Component, Vue } from 'vue-property-decorator';

/**
 * This page use as default routes
 */
@Component
export default class IndexPage extends Vue {
  loading = false;
  selection = 'event';

  icons = ['mdi-home', 'mdi-email', 'mdi-calendar', 'mdi-delete'];

  variant = 'default';

  title = 'Landing Page';

  mounted() {}
}
