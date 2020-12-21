import service from '@/utils/request.js';

export function videoPage(data) {
  return service({
    url: 'lotus/videoManage/page',
    method: 'post',
    data
  });
}

export function videoCancelTop(id) {
  return service({
    url: `lotus/videoManage/cancelTop/${id}`,
    method: 'post'
  });
}

export function videoDoTop(data) {
  return service({
    url: 'lotus/videoManage/doTop',
    method: 'post',
    data
  });
}
