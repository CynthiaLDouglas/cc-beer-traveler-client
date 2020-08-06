const config = require('../config')
const store = require('../store')

const createPost = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createPost
}
