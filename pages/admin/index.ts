import { Component, Vue } from 'vue-property-decorator';

/**
 * This page use as default routes
 */
@Component({
  layout: 'app'
})
export default class AdminPage extends Vue {
  loading = false;
  selection: 1;

  icons: ['mdi-home', 'mdi-email', 'mdi-calendar', 'mdi-delete'];
  items: ['default', 'absolute', 'fixed'];
  variant: 'default';

  mounted() {
    this.$router.push({ path: '/admin/tasks' });
  }

  reserve() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 2000);
  }
}
