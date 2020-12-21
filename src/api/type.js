import service from '@/utils/request.js';

export function typePage(id) {
  return service({
    url: `lotus/globalTypeManage/list/${id}`,
    method: 'post'
  });
}
export function typeDelete(id) {
  return service({
    url: `lotus/globalTypeManage/delete/${id}`,
    method: 'post'
  });
}

export function typeAdd(data) {
  return service({
    url: 'lotus/globalTypeManage/add',
    method: 'post',
    data
  });
}
