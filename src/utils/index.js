
import Cookies from 'js-cookie'

export function getKeepAliveRouter (target) {
    const quene = [...target];
    let result = [];
    while (quene.length) {
      const current = quene.shift();
      if (current.name && current.meta && !current.meta.noCache) {
        result.push(current.name);
      }
      if (current.children) quene.push(...current.children);
    }
    return result;
}
  

const TokenKey = 'Admin-Token'

export function getToken(TokenKey) {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
