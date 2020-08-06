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

module.exports = {
  onCreatePost,
  onShowAll
}
