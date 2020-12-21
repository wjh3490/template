import service from '@/utils/request.js';

export function bookPage(data) {
  return service({
    url: 'lotus/book/manage/page',
    method: 'post',
    data
  });
}

export function bookDetail(data) {
  return service({
    url: 'lotus/book/manage/detail',
    method: 'post',
    data
  });
}
