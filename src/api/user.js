import service from '@/utils/request.js';

export function menberPage(data) {
  return service({
    url: 'lotus/member/manage/page',
    method: 'post',
    data
  });
}

export function menberLevel(data) {
  return service({
    url: 'lotus/member/manage/level',
    method: 'post',
    data
  });
}
