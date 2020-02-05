import { message } from 'ant-design-vue'
const Fly = require('flyio/dist/npm/fly')
const fly = new Fly()

if (process.env.NODE_ENV === 'development') {
  fly.config.baseURL = '/v2/'
}

/* if (process.env.NODE_ENV === 'production') {
  fly.config.baseURL = ''
}
 */
// 添加请求拦截器
fly.interceptors.request.use(request => {
  /* request.headers['Authorization'] = localStorage.token */
  request.headers['Accept'] = 'application/json'
  return request
})

fly.interceptors.response.use(
  response => {
    // 只将请求结果的data字段返回
    const res = response.data
    if (res.code * 1 === 200) {
      return res.data
    }
    if (res.code * 1 === 400) {
      message.error(res.message)
    }
  },
  error => {
    /* 如有错误信息，请参考参考MDN */
    switch (error.response.status) {
      case 400:
        message.error('错误请求')
        break
      case 403:
        message.error('拒绝访问')
        break
      case 404:
        message.error('请求错误,未找到该资源')
        break
      case 405:
        message.error('请求方法未允许')
        break
      case 408:
        message.error('No message available')
        break
      case 500:
        message.error('服务器错误')
        break
      case 501:
        message.error('网络未实现')
        break
      case 502:
        message.error('网络错误')
        break
      case 503:
        message.error('503')
        break
      case 504:
        message.error('网络超时')
        break
      case 505:
        message.error('http版本不支持该请求')
        break
      default:
        message.error('网络超时')
        break
    }
    // 发生网络错误后会走到这里
    return Promise.resolve(error)
  }
)

export default fly
