import { renderComments } from './modules/renderComments.js'
import { commentsAll } from './modules/users.js'
import { commentsListener } from './modules/initListeners.js'
import { buttonAdd } from './modules/buttonAddComment.js'

renderComments()

const formComment = document.querySelector('.add-form-text')
const comments = document.querySelector('.comments')

commentsListener(comments, commentsAll, formComment, renderComments)

buttonAdd(formComment, commentsAll)
