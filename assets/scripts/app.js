'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const postEvents = require('./post/events')
const buttonEvents = require('./button/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-post').on('submit', postEvents.onCreatePost)
  $('#show-all-posts').on('click', postEvents.onShowAll)
  $('#show-one-post').on('submit', postEvents.onShowOne)
  $('#view-posts').on('click', '.delete-post', postEvents.onDeleteOne)
  $('.update').on('click', buttonEvents.toUpdatePost)
  $('#view-posts').on('submit', '.update-one-post', postEvents.onUpdatePost)
  $('#clear-posts').on('click', buttonEvents.onClearPost)
  $('#create').on('click', buttonEvents.toCreatePost)
  $('textarea').autogrow()
})
