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

function requestHeaders (customHeaders) {
  // Hard coding country code
  const defaultHeaders = {
    'Accept': 'application/json'
  }

  return _.assign(defaultHeaders, customHeaders)
}

function url () {
  return Config.API_ENDPOINT
}

function destination (path) {
  return url() + path
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
