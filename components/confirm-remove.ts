import { Component, Vue, Prop } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

export const REMOVED = 'removed';
export const CANCELED = 'canceled';
export const FAILED = 'failed';

@Component
export default class ConfirmRemoveDialog extends Vue {
  @Prop({ default: false }) open: boolean;
  @Prop({ default: false }) id: any;
  @Mutation('tasks/remove') remove: any;

  confirm() {
    if (!this.id) {
      this.$emit(CANCELED);
      return;
    }
    this.remove(this.id);
    this.$emit(REMOVED);
  }

  cancel() {
    this.$emit(CANCELED);
  }
}
