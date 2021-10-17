import axios from 'axios'

const categories = []

function init() {
  axios.get('/categories').then((entries) => (categories = entries))
}

function getCategoryNameById(categoryId) {
  return categories.find((category) => category === categoryId)
}

export default { getCategoryNameById, init }
