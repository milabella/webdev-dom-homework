import { commentsAll } from './users.js'

const comments = document.querySelector('.comments')

//Поменяла имя:
export const renderComments = () => {
    const commentsHTML = commentsAll
        .map((comment, index) => {
            return `
    <li class="comment" data-index="${index}">
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
