import service from '@/utils/request.js';

export function auditPage(data) {
  return service({
    url: 'lotus/audit/manage/page',
    method: 'post',
    data
  });
}

export function auditDetail(data) {
  return service({
    url: 'lotus/audit/manage/detail',
    method: 'post',
    data
  });
}

export function auditCommit(data) {
  return service({
    url: 'lotus/audit/manage/commit',
    method: 'post',
    data
  });
}
