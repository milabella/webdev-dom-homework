// Перенесла кнопку в отдельный документ js
import { replaceSymbols } from './replace.js'
import { postComment } from './fetchComments.js'
import { updateComments } from './comments.js'

export const initAddCommentListener = (renderComments) => {
  const name = document.querySelector('.add-form-name')
  const text = document.querySelector('.add-form-text')
  const addButton = document.querySelector('.add-form-button')

  addButton.addEventListener('click', () => {
    if (!name.value || !text.value) {
      alert('Поля нельзя оставлять пустыми')
      return
    }

    document.querySelector('.form-loading').style.display = 'block'
    document.querySelector('.add-form').style.display = 'none'

    postComment(replaceSymbols(text.value), replaceSymbols(name.value))
      .then((data) => {
        document.querySelector('.form-loading').style.display = 'none'
        document.querySelector('.add-form').style.display = 'flex'

        updateComments(data)
        renderComments()
        name.value = ''
        text.value = ''

        addButton.disabled = true
        addButton.textContent = 'комментарий публикуется...'
      })
      .catch((error) => {
        document.querySelector('.form-loading').style.display = 'none'
        document.querySelector('.add-form').style.display = 'flex'

        if (error.message === 'Failed to fetch') {
          alert('Нет интернета')
        }

        if (error.message === 'Сервер упал') {
          alert('Ошибка сервера')
        }

        if (error.message === 'Ошибка запроса') {
          alert('Имя и комментарий должны быть не короче 3х символов')

          name.classList.add('.-error')
          text.classList.add('.-error')

          setTimeout(() => {
            name.classList.remove('.-error')
            text.classList.remove('.-error')
          }, 2000)
        }
      })
      .finally(() => {
        document.querySelector('.form-loading').style.display = 'none'
        document.querySelector('.add-form').style.display = 'flex'

        addButton.disabled = false
        addButton.textContent = 'Написать'
      })
  })
}
