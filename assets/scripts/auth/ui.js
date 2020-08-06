const store = require('../store')

const signUpSuccess = function (response) {
  $('#message').text('You are all signed up! Try Signing In.')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Please try again.')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#message').text('You are all signed in!')
  $('form').trigger('reset')
  $('#authenticated').show()
  $('#unauthenticated').hide()
}

const signInFailure = function () {
  $('#message').text('Please try again.')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#message').text('Your password has been changed.')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Please try again.')
  $('form').trigger('reset')
}

const signOutSuccess = function (response) {
  $('#message').text('You are signed out.')
  $('#authenticated').hide()
  $('#unauthenticated').show()
}

const signOutFailure = function () {
  $('#message').text('Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
