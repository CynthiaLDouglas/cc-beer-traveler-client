const store = require('../store')

const showPostTemplate = require('../templates/post.handlebars')

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

module.exports = {
  createPostSuccess,
  createPostFailure,
  showAllSuccess,
  showAllFailure
}
