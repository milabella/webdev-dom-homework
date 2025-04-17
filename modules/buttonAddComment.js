// Перенесла кнопку в отдельный документ js
import { replaceSymbols } from './replace.js'
import { currentDate } from './currentDate.js'
import { renderComments } from './renderComments.js'
import { updateComments } from './comments.js'

const buttonAddComment = document.querySelector('.add-form-button')
const formName = document.querySelector('.add-form-name')

export function buttonAdd(formComment) {
    buttonAddComment.addEventListener('click', () => {
        if (formName.value === '' || formComment.value === '') {
            alert('Поля нельзя оставлять пустыми')
            return
        }

        const newComment = {
            date: currentDate,
            likes: 0,
            isLiked: false,
            text: replaceSymbols(formComment.value),
            name: replaceSymbols(formName.value),
        }

        fetch('https://wedev-api.sky.pro/api/v1/mila-belavina/comments', {
            method: 'POST',
            body: JSON.stringify(newComment),
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                updateComments(data.comments)
                renderComments()
            })

        formName.value = ''
        formComment.value = ''
    })
}
