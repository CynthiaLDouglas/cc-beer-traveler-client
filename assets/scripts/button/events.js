const ui = require('./ui')

const onClearPost = (event) => {
  event.preventDefault()
  ui.clearPost()
}

module.exports = {
  onClearPost
}
