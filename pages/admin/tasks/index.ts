import { Component, Vue } from 'vue-property-decorator';
import { Mutation, State } from 'vuex-class';
import { Task } from '~/store/task';
import { DateFilter } from '~/filters/date';

/**
 * list of tasks page
 */
@Component({
  layout: 'app',
  filters: {
    date: DateFilter
  }
})
export default class TasksPage extends Vue {
  @Mutation('dashboard/changeTitle') private changeTitle: any;
  @Mutation('dashboard/changeBreadcrumbs') private changeBreadcrumbs: any;
  @Mutation('task/done') done: any;
  @Mutation('task/remove') remove: any;
  @State((state) => state.task.list) items: Task[];
  headers = [
    { text: 'Id', value: 'id' },
    { text: 'Tanggal', value: 'date' },
    { text: 'Tugas', value: 'title', sortable: false },
    {
      text: 'Status',
      align: 'center',
      value: 'status',
      sortable: false,
      width: 75
    },
    { text: '', align: 'right', value: 'action', sortable: false, width: 140 }
  ];

  loading = false;

  mounted() {
    this.changeTitle('Daftar Tugas');
    this.changeBreadcrumbs([
      {
        icon: 'briefcase-outline',
        text: 'daftar tugas',
        disabled: true,
        to: '/tasks'
      }
    ]);
  }
}
