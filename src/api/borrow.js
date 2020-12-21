import service from '@/utils/request.js';

export function borrowPage(data) {
  return service({
    url: 'lotus/borrow/manage/page',
    method: 'post',
    data
  });
}


