import service from '@/utils/request.js';

export function GusetBookPage(data) {
  return service({
    url: 'lotus/guestbook/manage/page',
    method: 'post',
    data
  });
}

export function guestBookDetail(data) {
  return service({
    url: 'lotus/guestbook/manage/detail',
    method: 'post',
    data
  });
}
export function guestBookAnswer(data) {
  return service({
    url: 'lotus/guestbook/manage/answer',
    method: 'post',
    data
  });
}
