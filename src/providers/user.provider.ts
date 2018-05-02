import { UserProfileResponse } from '../types/user.types';
import { appConfigs } from '../configs/configs';

export class UserProvider {
  getUserInfo(): Promise<UserProfileResponse> {
    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', `${appConfigs.apiUrl}/users/self/?access_token=${appConfigs.token}`);

        xhr.send();

        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              const response = JSON.parse(xhr.response);
              // console.log(response.data);
              resolve(response.data);
            } else {
              reject(xhr.response);
            }
          }
        };
      }
    );
  }
}