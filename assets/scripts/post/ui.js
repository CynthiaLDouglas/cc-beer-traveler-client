const store = require('../store')

const createPostSuccess = function (response) {
  store.user = response.user
  $('#message').text('You submitted a post')
  $('form').trigger('reset')
}

const createPostFailure = function (response) {
  $('#message').text('try again')
  $('form').trigger('reset')
}

module.exports = {
  createPostSuccess,
  createPostFailure
}
