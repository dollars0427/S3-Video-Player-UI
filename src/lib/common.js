import queryString from 'query-string';

const Common = {
  async loadFolder(baseApiUrl, folder){
    return new Promise(async(resolve, reject) => {
      const apiUrl = `${baseApiUrl}/${folder}`;
      const fetchResult = await fetch(apiUrl);
      const status = await fetchResult.status;

      //If cannot connect with API server
      if(status !== 200){
        const err = 'Cannot loading folder content.';
        reject(err);
        return;
      }

      //If user do not login or no permission
      if(status === 403){
        const err = 'Sorry, You don\'t had permission to access it.';
        reject(err);
        return;
      }

      const resultJson = await fetchResult.json();

      resolve(resultJson);
    });
  },
  async getUserInfo(baseApiUrl, userId, loginInfo){
    return new Promise(async(resolve, reject) => {
      const query = queryString.stringify({
        userId: loginInfo['userId'],
        token: loginInfo['token'],
      });
      const apiUrl = `${baseApiUrl}/employee/${userId}?${query}`;

      const fetchResult = await fetch(apiUrl);
      const status = await fetchResult.status;

      //If cannot connect with API server
      if(status !== 200){
        const err = 'Cannot loading user information.';
        reject(err);
        return;
      }

      //If user do not login or no permission
      if(status === 403){
        const err = 'Sorry, You don\'t had permission to access it.';
        reject(err);
        return;
      }

      const resultJson = await fetchResult.json();

      resolve(resultJson);
    });
  },
}

export default Common;
