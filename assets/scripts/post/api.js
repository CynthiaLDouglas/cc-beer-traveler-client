const config = require('../config')
const store = require('../store')

const createPost = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const onePost = function (postId) {
  console.log(postId)
  return $.ajax({
    url: config.apiUrl + '/posts/' + postId,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showAll = function () {
  return $.ajax({
    url: config.apiUrl + '/post',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deletePost = function (postId) {
  return $.ajax({
    url: config.apiUrl + '/posts/' + postId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updatePost = function (postId, formData) {
  return $.ajax({
    url: config.apiUrl + '/posts/' + postId,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createPost,
  deletePost,
  showAll,
  updatePost,
  onePost
}
