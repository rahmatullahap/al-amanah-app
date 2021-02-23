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

  items = [
    {
      src: require(`~/assets/images/rw05-logo.png`)
    },
    {
      src: require(`~/assets/images/alamanah-logo.png`)
    }
  ];

  mounted() {}

  /**
   * exit to login page
   */
  logout() {
    this.$router.push({ path: '/login' });
  }
}
