const store = require('../store')

const showPostTemplate = require('../templates/allPost.handlebars')
const onePostTemplate = require('../templates/onePost.handlebars')

const createPostSuccess = function (response) {
  store.user = response.user
  $('#message').text('You submitted a post')
  $('form').trigger('reset')
}

const createPostFailure = function (response) {
  $('#message').text('try again')
  $('form').trigger('reset')
}

const showAllSuccess = function (response) {
  $('#message').text(`There are ${response.posts.length} posts`)
  const showAllPost = showPostTemplate({ posts: response.posts })
  $('#view-posts').append(showAllPost)
}

const showAllFailure = function (response) {
  $('#message').text('try again')
}

const showOneSuccess = function (response) {
  $('#message').text('it works')
  const showOnePost = onePostTemplate({ post: response.post })
  $('#view-posts').append(showOnePost)
}

const showOneFailure = function (response) {
  $('#message').text('try again')
}

const deleteOneSuccess = function (response) {
  $('#message').text('Resource deleted')
  $('form').trigger('reset')
}

const deleteOneFailure = function (response) {
  $('#message').text('try again')
}

const updateSuccess = function (response) {
  $('#message').text('Resource update')
  $('form').trigger('reset')
}

const updateFailure = function (response) {
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
