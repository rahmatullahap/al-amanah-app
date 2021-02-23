import { Component, Vue } from 'vue-property-decorator';
import { Mutation, State } from 'vuex-class';
import { Task } from '~/store/task';

/**
 * add task page
 */
@Component({
  layout: 'app'
})
export default class AddTaskPage extends Vue {
  @Mutation('dashboard/changeTitle') private changeTitle: any;
  @Mutation('dashboard/changeBreadcrumbs') private changeBreadcrumbs: any;
  @Mutation('task/add') add: any;
  @State((state) => state.task.list) tasks: Task[];
  title: string = '';
  description: string = '';
  loading = false;

  mounted() {
    this.changeTitle('Buat Tugas Baru');
    this.changeBreadcrumbs([
      {
        icon: 'briefcase-outline',
        text: 'daftar tugas',
        disabled: true,
        to: '/admin/tasks'
      },
      {
        icon: 'briefcase-plus-outline',
        text: 'buat baru',
        to: '/admin/tasks/add'
      }
    ]);
  }

  save() {
    this.add({
      title: this.title,
      description: this.description
    });
    this.$router.push({ path: '/admin/tasks' });
  }
}
