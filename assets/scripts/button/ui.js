
const clearPost = () => {
  $('#view-posts').empty()
  $('#most-recent').empty()
  $('#auth-message').text('All clear! Pour a beer!')
  $('img').show()
}

const onlyCreate = () => {
  $('#view-posts').empty()
  $('#most-recent').empty()
  $('#auth-message').text('You are ready to submit a post!')
  $('img').hide()
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
