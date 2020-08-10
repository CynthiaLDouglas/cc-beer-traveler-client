
const clearPost = () => {
  $('#view-posts').empty()
  $('#most-recent').empty()
}

const onlyCreate = () => {
  $('#delete-form').collapse('hide')
  $('#update-form').collapse('hide')
  $('#most-recent').empty()
}

const onlyDelete = () => {
  $('#update-form').collapse('hide')
  $('#create-form').collapse('hide')
  $('#most-recent').empty()
}

const onlyUpdate = () => {
  $('#delete-form').collapse('hide')
  $('#create-form').collapse('hide')
  $('#most-recent').empty()
}

module.exports = {
  clearPost,
  onlyCreate,
  onlyDelete,
  onlyUpdate
}
