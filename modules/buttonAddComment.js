import { replaceSymbols } from './replace.js'
import { currentDate } from './currentDate.js'
import { renderComments } from './renderComments.js'

const buttonAddComment = document.querySelector('.add-form-button')
const formName = document.querySelector('.add-form-name')

export function buttonAdd(formComment, commentsAll) {
    buttonAddComment.addEventListener('click', () => {
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

        renderComments()
    })
}
