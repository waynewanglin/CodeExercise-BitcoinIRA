import { strings } from '@/localization';
import { HttpClient } from '@/controllers';

export class UserController {
  static login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username && password) {
          resolve({ username });
        } else {
          reject(new Error(strings.login.invalidCredentials));
        }
      }, 250);
    });
  }

  static register(userData) {
    return new Promise((resolve, reject) => {
      HttpClient.client
        .post('users', userData)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(new Error(e.message));
        });
    });
  }

  static logout() {
    return new Promise((resolve) => {
      setTimeout(resolve, 250);
    });
  }

  static fetchUserList() {
    return new Promise((resolve, reject) => {
      HttpClient.client
        .get('users')
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(new Error(e.message));
        });
    });
  }
}
