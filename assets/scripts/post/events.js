const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreatePost = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
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
  api.onePost(postId.post.id)
    .then(ui.showOneSuccess)
    .catch(ui.showOneFailure)
}

const onDeleteOne = function (event) {
  event.preventDefault()
  const postId = $(event.target).data('id')
  api.deletePost(postId)
    .then(() => onShowAll(event))
    .then(ui.deleteOneSuccess)
    .catch(ui.deleteOneFailure)
}

// const onDeleteOne = function (event) {
//   event.preventDefault()
//   const postId = getFormFields(event.target)
//   api.deletePost(postId.post.id)
//     .then(ui.deleteOneSuccess)
//     .catch(ui.deleteOneFailure)
// }

const onUpdatePost = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const postId = formData.post.id
  api.updatePost(postId, formData)
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
