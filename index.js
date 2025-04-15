import { renderUsers } from './modules/renderUsers.js'
import { currentDate } from './modules/currentDate.js'
import { commentsAll } from './modules/users.js'
import { commentsListener } from './modules/initListeners.js'
import { replaceSymbols } from './modules/replace.js'

renderUsers()

const buttonAdd = document.querySelector('.add-form-button')
const formName = document.querySelector('.add-form-name')
const formComment = document.querySelector('.add-form-text')
const comments = document.querySelector('.comments')

commentsListener(comments, commentsAll, formComment, renderUsers)

buttonAdd.addEventListener('click', () => {
    if (formName.value === '' || formComment.value === '') {
        alert('Поля нельзя оставлять пустыми')
        return
    }

    const newComment = {
        name: replaceSymbols(formName.value),
        comment: replaceSymbols(formComment.value),
        liked: false,
        likesTotal: 0,
        date: currentDate,
    }

    commentsAll.push(newComment)

    formName.value = ''
    formComment.value = ''

    renderUsers()
})
