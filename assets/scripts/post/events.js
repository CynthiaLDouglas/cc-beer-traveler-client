const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreatePost = function (event) {
  event.preventDefault()
  const form = event.target
  console.log(event.target)
  const formData = getFormFields(form)
  console.log('formData is', formData)
  api.createPost(formData)
    .then(ui.createPostSuccess)
    .catch(ui.createPostFailure)
}

const onShowAll = function (event) {
  event.preventDefault()
  api.showAll()
    .then(ui.showAllSuccess)
    .catch(ui.showAllFailure)
}

const onShowOne = function (event) {
  event.preventDefault()
  const postId = getFormFields(event.target)
  console.log('formData is', postId)
  console.log(postId.post.id)
  api.onePost(postId.post.id)
    .then(ui.showOneSuccess)
    .catch(ui.showOneFailure)
}

const onDeleteOne = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('Post to delete is', formData)
  api.deletePost(formData)
    .then(ui.deleteOneSuccess)
    .catch(ui.deleteOneFailure)
}

const onUpdatePost = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('Post to update is', formData)
  api.updatePost(formData)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

module.exports = {
  onCreatePost,
  onShowAll,
  onShowOne,
  onDeleteOne,
  onUpdatePost
}
