
const clearPost = () => {
  $('#view-posts').empty()
}

const onlyCreate = () => {
  $('#delete-form').collapse('hide')
  $('#update-form').collapse('hide')
}

const onlyDelete = () => {
  $('#update-form').collapse('hide')
  $('#create-form').collapse('hide')
}

const onlyUpdate = () => {
  $('#delete-form').collapse('hide')
  $('#create-form').collapse('hide')
}

module.exports = {
  clearPost,
  onlyCreate,
  onlyDelete,
  onlyUpdate
}
