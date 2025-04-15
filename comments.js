const formName = document.querySelector('.add-form-name')
const formComment = document.querySelector('.add-form-text')
const buttonAdd = document.querySelector('.add-form-button')
const comments = document.querySelector('.comments')
const myDate = new Date()
const currentDate =
    myDate.getDate().toString().padStart(2, '0') +
    '.' +
    myDate.getMonth().toString().padStart(2, '0') +
    '.' +
    myDate.getFullYear() +
    ' ' +
    myDate.getHours() +
    ':' +
    myDate.getMinutes().toString().padStart(2, '0')

const commentsAll = [
    {
        name: 'Глеб Фокин',
        comment: 'Отличный сайт!',
        liked: false,
        likesTotal: 3,
        date: '12.05.25 12:18',
    },
    {
        name: 'Варвара Н.',
        comment: 'Мне нравится как оформлена эта страница! ❤',
        liked: false,
        likesTotal: 75,
        date: '13.05.25 19:22',
    },
]

const renderUsers = () => {
    const commentsHTML = commentsAll
        .map((comment, index) => {
            return `
            <li class="comment">
      <div class="comment-header">
        <div>${comment.name}</div>
        <div>${comment.date}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">
          ${comment.comment}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter">${comment.likesTotal}</span>
          <button class="like-button ${comment.liked ? '-active-like' : ''}" data-index="${index}"></button>
        </div>
      </div>
    </li>`
        })
        .join('')

    comments.innerHTML = commentsHTML
}

renderUsers()

comments.addEventListener('click', (event) => {
    event.stopPropagation()
    if (event.target.classList.contains('like-button')) {
        const index = event.target.dataset.index
        const comment = commentsAll[index]

        if (comment.liked) {
            comment.likesTotal--
            comment.liked = false
        } else {
            comment.likesTotal++
            comment.liked = true
        }
        renderUsers()
    }

    const commentEl = event.target.closest('.comment')
    if (commentEl) {
        const allCommentEls = Array.from(document.querySelectorAll('.comment'))
        const index = allCommentEls.indexOf(commentEl)

        const originalComment = commentsAll[index]
        formComment.value = `> ${originalComment.comment}`
        formComment.focus()
    }
})

buttonAdd.addEventListener('click', () => {
    if (formName.value === '' || formComment.value === '') {
        alert('Поля нельзя оставлять пустыми')
        return
    }

    const newComment = {
        name: formName.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
        comment: formComment.value
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;'),
        liked: false,
        likesTotal: 0,
        date: currentDate,
    }

    commentsAll.push(newComment)

    formName.value = ''
    formComment.value = ''

    renderUsers()
})

renderUsers()
