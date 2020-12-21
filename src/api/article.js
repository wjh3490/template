import service from '@/utils/request.js';

export function articlePage(data,params) {
  return service({
    url: `lotus/articleManage/${1}/page`,
    method: 'post',
    data,
    params,
    // transformRequest: [
    //   function (data) {
    //      let ret = ''
    //      for (let it in data) {
    //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //      }
    //      ret = ret.substring(0, ret.lastIndexOf('&'));
    //      return ret
    //   }
    // ],
  });
}

export function articleCancelTop(id) {
  return service({
    url: `lotus/articleManage/cancelTop/${id}`,
    method: 'post'
  });
}

export function articleDoTop(data) {
  return service({
    url: 'lotus/articleManage/doTop',
    method: 'post',
    data
  });
}
