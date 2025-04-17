import { renderComments } from './modules/renderComments.js'
import { commentsAll, updateComments } from './modules/comments.js'
import { commentsListener } from './modules/initListeners.js'
import { buttonAdd } from './modules/buttonAddComment.js'

fetch('https://wedev-api.sky.pro/api/v1/mila-belavina/comments', {
    method: 'GET',
})
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        updateComments(data.comments)
        renderComments()
    })

renderComments()

const formComment = document.querySelector('.add-form-text')
const commentsUl = document.querySelector('.comments')

commentsListener(commentsUl, commentsAll, formComment, renderComments)

buttonAdd(formComment, commentsAll)
