const store = require('../store')

const showPostTemplate = require('../templates/allPost.handlebars')
const onePostTemplate = require('../templates/onePost.handlebars')

const createPostSuccess = function (response) {
  store.post = response.post
  $('#view-posts').empty()
  $('#most-recent').empty()
  $('#auth-message').text('You successfully submitted a post.')
  $('form').trigger('reset')
  $('img').show()
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
  const showAllPost = showPostTemplate({ posts: response.posts, userId: store.user._id })
  $('#view-posts').append(showAllPost)
  $('#create-form').collapse('hide')
  $('img').hide()
}

const showAllFailure = function (response) {
  $('#view-posts').empty()
  $('#most-recent').empty()
  $('#auth-message').text('Please try again.')
}

const showOneSuccess = function (response) {
  $('#view-posts').empty()
  $('#most-recent').empty()
  $('#show-modal').text('We found it! Close this box to view!')
  $('#auth-message').text('Enjoy!')
  const showOnePost = onePostTemplate({ post: response.post, userId: store.user._id })
  $('#view-posts').append(showOnePost)
  $('form').trigger('reset')
  $('img').hide()
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
