const store = require('../store')

const showPostTemplate = require('../templates/allPost.handlebars')
const onePostTemplate = require('../templates/onePost.handlebars')

const createPostSuccess = function (response) {
  store.post = response.post
  $('#view-posts').empty()
  $('#message').text('You submitted a post')
  $('form').trigger('reset')
}

const createPostFailure = function (response) {
  $('#view-posts').empty()
  $('#message').text('try again')
  $('form').trigger('reset')
}

const showAllSuccess = function (response) {
  $('#view-posts').empty()
  $('#message').text(`There are ${response.posts.length} posts`)
  const showAllPost = showPostTemplate({ posts: response.posts })
  $('#view-posts').append(showAllPost)
}

const showAllFailure = function (response) {
  $('#view-posts').empty()
  $('#message').text('try again')
}

const showOneSuccess = function (response) {
  $('#view-posts').empty()
  $('#message').text('it works')
  const showOnePost = onePostTemplate({ post: response.post })
  $('#view-posts').append(showOnePost)
}

const showOneFailure = function (response) {
  $('#view-posts').empty()
  $('#message').text('try again')
}

const deleteOneSuccess = function (response) {
  $('#view-posts').empty()
  $('#message').text('Resource deleted')
  $('form').trigger('reset')
}

const deleteOneFailure = function (response) {
  $('#view-posts').empty()
  $('#message').text('try again')
}

const updateSuccess = function (response) {
  $('#view-posts').empty()
  $('#message').text('Resource update')
  $('form').trigger('reset')
}

const updateFailure = function (response) {
  $('#view-posts').empty()
  $('#message').text('try again')
}

module.exports = {
  createPostSuccess,
  createPostFailure,
  deleteOneSuccess,
  deleteOneFailure,
  showAllSuccess,
  showAllFailure,
  showOneSuccess,
  showOneFailure,
  updateSuccess,
  updateFailure
}
