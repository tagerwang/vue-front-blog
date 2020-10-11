import request from '@/utils/request'

export function fetchArticle(id) {
  return request({
    url: `/admin/detail/${id}`,
    method: 'get',
    baseURL: 'http://localhost:3000'
  })
}
