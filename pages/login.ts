import { delay } from 'bluebird';
import { Component, Vue } from 'vue-property-decorator';

/**
 * Login page
 */
@Component
export default class LoginPage extends Vue {
  username = '';
  password = '';
  loading = false;
  errorToast = false;
  errorMessage = '';
  async login() {
    this.loading = true;
    try {
      // const res = await this.$axios.get(`http://localhost:8585/ping`, {
      //   headers: { 'Access-Control-Allow-Origin': '*' },
      //   data: {
      //     username: this.username,
      //     password: this.password
      //   }
      // });
      if (
        this.username.toLowerCase() === 'admin' &&
        this.password.toLowerCase() === 'admin'
      ) {
        localStorage.setItem(
          'backend/config',
          JSON.stringify({
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMSIsImlhdCI6MTYxMDc4OTA5NX0.nwMp0iRuztNtbzkWk12FZHuXxwBG-T2dHKYNrEMoApQ'
          })
        );
        // wait local storage to persist
        await delay(500);
        window.location.replace('/admin');
      } else {
        throw new Error('wrong password');
      }
    } catch (err) {
      this.errorToast = true;
      this.errorMessage = err.message || err.toString();
    }
    this.loading = false;
  }
}
