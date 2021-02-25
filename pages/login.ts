import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';

/**
 * Login page
 */
@Component
export default class LoginPage extends Vue {
  email = '';
  password = '';
  loading = false;
  errorToast = false;
  errorMessage = '';
  async login() {
    this.loading = true;
    try {
      const data = await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password);
      if (data.user) {
        window.location.replace('/admin');
      }
    } catch (err) {
      this.errorToast = true;
      this.errorMessage = err.message || err.toString();
    }
    this.loading = false;
  }
}
