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

const showAllSuccess = function (response) {
  $('#message').text('See All Posts')
  const allPosts = (`
    <h3>${response.posts.title}</h3>
    <h4>${response.posts.placeName}</h4>
    <h5>${response.posts.cityLoc}${response.posts.stateLoc}</h5>
    <p>${response.posts.content}</p>
    `)
  $('#view-all-posts').text(allPosts)
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
