
const clearPost = () => {
  $('#view-posts').empty()
  $('#most-recent').empty()
}

const onlyCreate = () => {
  $('#view-posts').empty()
  $('#most-recent').empty()
}

const onlyDelete = () => {
  $('#create-form').collapse('hide')
  $('#most-recent').empty()
}

const onlyUpdate = () => {
  $('#create-form').collapse('hide')
  $('#most-recent').empty()
}

module.exports = {
  clearPost,
  onlyCreate,
  onlyDelete,
  onlyUpdate
}
