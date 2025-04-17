import { commentsAll } from './comments.js'

const commentsUl = document.querySelector('.comments')

//Поменяла имя:
export const renderComments = () => {
    const commentsHTML = commentsAll
        .map((comment, index) => {
            return `
    <li class="comment" data-index="${index}" data-id="${comment.id}">
      <div class="comment-header">
        <div>${comment.author.name}</div>
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
          <button class="like-button ${comment.isLiked ? '-active-like' : ''}" data-index="${index}" data-id="${comment.id}"></button>
        </div>
      </div>
    </li>`
        })
        .join('')

    commentsUl.innerHTML = commentsHTML
}
