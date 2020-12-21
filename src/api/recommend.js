import service from '@/utils/request.js';

export function recommendPage(data) {
  return service({
    url: 'lotus/recommend/manage/page',
    method: 'post',
    data
  });
}

export function recommendAdd(data) {
  return service({
    url: 'lotus/recommend/manage/add',
    method: 'post',
    data
  });
}
export function recommendDelete(data) {
  return service({
    url: 'lotus/recommend/manage/remove',
    method: 'post',
    data
  });
}
