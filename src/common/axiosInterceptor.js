import axios from 'axios'
import {
  SET_LOADER, RESET_LOADER
} from "../actionCreators/index";

export default function createInterceptors (store) {
  let requestCount = 0
  axios.interceptors.request.use(function (config) {
    // eslint-disable-next-line
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    ++requestCount
    addLoader()
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  axios.interceptors.response.use(function (response) {
    --requestCount
    removeLoader()
    return response
  }, function (error) {
    --requestCount
    removeLoader()
    return Promise.reject(error)
  })

  function removeLoader () {
    if (requestCount === 0) {
      store.dispatch({
        type: RESET_LOADER
      })
    }
  }

  function addLoader () {
    if (requestCount === 1) {
      store.dispatch({
        type: SET_LOADER
      })
    }
  }
}
