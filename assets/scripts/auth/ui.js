const store = require('../store')

const mostRecentTemplate = require('../templates/recentpost.handlebars')

const signUpSuccess = function (response) {
  $('#message').text('You are all signed up! Try Signing In.')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Please try again.')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#auth-message').text(`You are all signed in ${store.user.email}! Welcome!`)
  $('form').trigger('reset')
  $('#authenticated').show()
  $('#unauthenticated').hide()
  $('#most-recent').empty()
  // const mostRecentHtml = mostRecentTemplate({ post: post })
  // $('#most-recent').append(mostRecentHtml)
}

const signInFailure = function () {
  $('#message').text('Please try again.')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#modal-message').text('Your password has been changed.')
  $('#auth-message').text('Your password has been changed.')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#modal-message').text('Please try again.')
  $('form').trigger('reset')
}

const signOutSuccess = function (response) {
  $('#message').text('See you next time.')
  $('#authenticated').hide()
  $('#unauthenticated').show()
  $('#create-form').collapse('hide')
  $('#most-recent').empty()
}

const signOutFailure = function () {
  $('#auth-message').text('Please try again.')
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
