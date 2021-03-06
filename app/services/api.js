// USAGE
// api.post('properties', {
//   payload: {
//     user: userPayload
//   },
//   headers: {
//     'X-Some-Header': 1337
//   }
// })

import axios from 'axios'
import _ from 'lodash'

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/'

function requestHeaders (customHeaders) {
  const defaultHeaders = {
    'Accept': 'application/json'
  }

  return _.assign(defaultHeaders, customHeaders)
}

function destination (path) {
  return API_ENDPOINT + path
}

function get (path, hash = {}) {
  return call('GET', path, hash)
}

function post (path, hash = {}) {
  return call('POST', path, hash)
}

function patch (path, hash = {}) {
  return call('PATCH', path, hash)
}

function del (path, hash = {}) {
  return call('DELETE', path, hash)
}

function call (method, path, hash) {
  return axios({
    method: method,
    url: destination(path),
    data: hash.payload,
    timeout: 30000, // request timeout 30s
    headers: requestHeaders(hash.headers)
  })
}

module.exports = {
  get: get,
  post: post,
  patch: patch,
  del: del
}
