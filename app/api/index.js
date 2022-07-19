/**
 * Created on July 17, 2022
 * API main method General api to acces data from web
 */

import ApiConstants from './apiConstants';

export default function api(path, params, method, token) {
  let apiUrl = ApiConstants.BASE_URL + path;
  if (method === 'GET' || (method === 'get')) {
    apiUrl = apiUrl + params + '?' + 'api_key=' + ApiConstants.API_KEY;
    console.log('API GET METHOD URL: ===', apiUrl);
  }

  let options;
  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: method,
    ...(method !== 'get' && params && { body: JSON.stringify(params) }),
  };

  return new Promise((resolve, reject) => {
    fetch(apiUrl, options)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => resolve(jsonResponse))
      .catch(error => reject(error));
  });
}
