const store = require('../store')

const showPostTemplate = require('../templates/allPost.handlebars')
const onePostTemplate = require('../templates/onePost.handlebars')

const createPostSuccess = function (response) {
  store.post = response.post
  $('#view-posts').empty()
  $('#most-recent').empty()
  $('#auth-message').text('You successfully submitted a post.')
  $('form').trigger('reset')
}

const createPostFailure = function (response) {
  $('#view-posts').empty()
  $('#most-recent').empty()
  $('#auth-message').text('Sorry. Please try to submit again.')
}

const showAllSuccess = function (response) {
  $('#view-posts').empty()
  $('#most-recent').empty()
  $('#auth-message').text(`There are ${response.posts.length} posts.`)
  const showAllPost = showPostTemplate({ posts: response.posts })
  $('#view-posts').append(showAllPost)
}

const showAllFailure = function (response) {
  $('#view-posts').empty()
  $('#most-recent').empty()
  $('#auth-message').text('Please try again.')
}

const showOneSuccess = function (response) {
  $('#view-posts').empty()
  $('form').trigger('reset')
  $('#show-modal').text('Enjoy!')
  $('#most-recent').empty()
  $('#auth-message').text('Enjoy!')
  const showOnePost = onePostTemplate({ post: response.post })
  $('#view-posts').append(showOnePost)
}

const showOneFailure = function (response) {
  $('#view-posts').empty()
  $('#most-recent').empty()
  $('#show-modal').text('Please try again.')
}

const deleteOneSuccess = function (response) {
  $('#view-posts').empty()
  $('#most-recent').empty()
  $('#auth-message').text('Your post has been deleted.')
  $('form').trigger('reset')
}

const deleteOneFailure = function (response) {
  $('#view-posts').empty()
  $('#most-recent').empty()
  $('#auth-message').text('Please try again.')
}

const updateSuccess = function (response) {
  $('#view-posts').empty()
  $('#most-recent').empty()
  $('#auth-message').text('Your post has been updated.')
  $('form').trigger('reset')
}

const updateFailure = function (response) {
  $('#view-posts').empty()
  $('#most-recent').empty()
  $('#auth-message').text('Please try again.')
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
