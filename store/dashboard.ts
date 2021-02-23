export interface DashboardState {
  darkTheme: boolean;
  miniMenu: boolean;
  title: string;
  breadcrumbs: Breadcrumb[];
}

export interface Breadcrumb {
  text: string;
  disabled: boolean;
  icon?: string;
  to?: string;
}

/**
 * Get default state of dashboard
 *
 * @export
 * @returns
 */
export function state(): DashboardState {
  return {
    title: 'Dashboard Fasilitas Kesehatan',
    darkTheme: true,
    miniMenu: false,
    breadcrumbs: [rootBreadcrumb]
  };
}

const rootBreadcrumb: Breadcrumb = {
  icon: 'view-dashboard',
  text: '',
  disabled: true,
  to: ''
};

export const mutations = {
  /**
   * Toggle dark theme
   *
   * @param {DashboardState} state
   */
  toggleTheme(state: DashboardState) {
    state.darkTheme = !state.darkTheme;
  },

  /**
   * Toggle mini menu
   *
   * @param {DashboardState} state
   */
  toggleMiniMenu(state: DashboardState) {
    state.miniMenu = !state.miniMenu;
  },

  /**
   * Change dashboard title
   *
   * @param {DashboardState} state
   * @param {string} title
   */
  changeTitle(state: DashboardState, title: string) {
    state.title = title;
  },

  /**
   * Change breadcrumbs state
   *
   * @param {DashboardState} state
   * @param {Breadcrumb[]} items
   */
  changeBreadcrumbs(state: DashboardState, items: Breadcrumb[]) {
    const root = [rootBreadcrumb];
    state.breadcrumbs = root.concat(items);
  }
};
