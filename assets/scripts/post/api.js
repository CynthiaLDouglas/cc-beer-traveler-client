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

const deletePost = function (data) {
  return $.ajax({
    url: config.apiUrl + '/posts/',
    method: 'DELETE',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createPost,
  deletePost,
  showAll,
  onePost
}
