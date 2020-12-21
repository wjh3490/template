import service from '@/utils/request.js';

export function login(data) {
  return service({
    url: '/user/login/pwd',
    method: 'post',
    data
  });
}

export function getUser(id) {
  return service({
    url: `user/user/${id}`,
    method: 'get'
  });
}

export function logout(data) {
  return service({
    url: '/user/login/quit',
    method: 'post',
    data
  });
}
