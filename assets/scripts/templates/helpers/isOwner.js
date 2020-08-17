'use strict'

const isOwner = (ownerId, userId) => {
  if (ownerId === userId) {
    return true
  } else {
    return false
  }
}

module.exports = isOwner
