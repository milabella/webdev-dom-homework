import { commentsAll } from './comments.js'

const commentsUl = document.querySelector('.comments')

export const renderComments = () => {
    const commentsHTML = commentsAll
        .map((comment) => {
            return `
    <li class="comment" data-id="${comment.id}">
      <div class="comment-header">
        <div>${comment.name}</div>
        <div>${comment.date}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">
          ${comment.text}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter">${comment.likes}</span>
          <button class="like-button ${comment.isLiked ? '-active-like' : ''}" data-id="${comment.id}"></button>
        </div>
      </div>
    </li>`
        })
        .join('')

    commentsUl.innerHTML = commentsHTML
}
