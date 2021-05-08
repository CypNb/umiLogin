import request from '../utils/request';
import { parse } from 'querystring';

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

export async function accountLogin(params) {
  const { username, password } = params;
  const data = { username, password };
  console.log(data);

  return request('/api/user/login', {
    method: 'POST',
    data,
  })
    .then(function(response) {
      console.log(response);
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
}
