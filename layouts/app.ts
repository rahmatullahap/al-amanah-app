import { Component, Vue, Watch } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import InitialFilter from '~/filters/initial';

export interface Menu {
  id: string;
  icon?: string;
  title: string;
  active?: boolean;
  to?: string;
  items?: Menu[];
}

/**
 * Default layout page
 */
@Component({
  middleware: ['authorized'],
  filters: {
    initial: InitialFilter
  }
})
export default class AppLayout extends Vue {
  search = '';
  clipped = false;
  @State((state) => state.dashboard.title) title: any;
  @State((state) => state.dashboard.darkTheme) darkTheme: any;
  @State((state) => state.dashboard.miniMenu) miniMenu: any;
  @State((state) => state.dashboard.breadcrumbs) breadcrumbs: any;
  @Mutation('dashboard/toggleTheme') toggleTheme: any;
  @Mutation('dashboard/toggleMiniMenu') toggleMiniMenu: any;

  leftDrawer = true;
  rightDrawer = false;
  providerId = 'admin';
  providerName = 'Admin';
  providerLogo = require(`~/assets/images/rw05-logo.png`);
  profileName = 'admin';
  profilePicture = require(`~/assets/images/rw05-logo.png`);
  profileEmail = 'admin@email.id';
  access = '*';
  isUpdate = false;

  /**
   * Apply dark theme programmatically
   */
  @Watch('darkTheme')
  onDarkThemeChanged(isDark: boolean) {
    this.$vuetify.theme.dark = isDark;
  }

  /**
   * listen app update
   */
  async mounted() {
    const workbox = await window['$workbox']; // eslint-disable-line
    if (workbox) {
      workbox.addEventListener('installed', (event) => {
        this.isUpdate = event?.isUpdate || false;
      });
    }
  }

  updateApp() {
    this.isUpdate = false;
    location.reload(true);
  }

  /**
   * exit to login page
   */
  logout() {
    this.$router.push({ path: '/login' });
  }

  /**
   * Filter menu
   */
  menuFilter(value: Menu[], keywords: string): Menu[] {
    const pattern = new RegExp(keywords, 'igm');

    /**
     * Filter menu
     *
     * @param {Menu} menu
     * @returns
     */
    const filter = (menu: Menu[]): Menu[] => {
      return menu.filter((m) => {
        if (this.access !== '*') {
          if (m.items && m.items.length) {
            return filter(m.items);
          }
          const accessPattern = new RegExp(m.id.replace('.', '\\.'), 'igm');
          if (!accessPattern.test(this.access)) {
            return false;
          }
        }
        const found = pattern.test(m.title) || pattern.test(m.to);
        if (found) {
          return true;
        }
        // check if sub-items has this keywords
        if (!m.items) {
          return false;
        }
        const items = filter(m.items);
        return items.length > 0;
      });
    };

    return filter(value);
  }

  items: Menu[] = [
    {
      id: 'tasks',
      icon: 'account-multiple',
      title: 'Tugas',
      active: true,
      to: '/admin/tasks'
    }
  ];
}
