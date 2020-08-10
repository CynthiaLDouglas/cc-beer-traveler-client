const ui = require('./ui')

const onClearPost = (event) => {
  event.preventDefault()
  ui.clearPost()
}

const toCreatePost = (event) => {
  event.preventDefault()
  ui.onlyCreate()
}
const toDeletePost = (event) => {
  event.preventDefault()
  ui.onlyDelete()
}
const toUpdatePost = (event) => {
  event.preventDefault()
  ui.onlyUpdate()
}

module.exports = {
  onClearPost,
  toCreatePost,
  toDeletePost,
  toUpdatePost
}
