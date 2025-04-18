import { commentsAll } from './comments.js'

export const initCommentListener = (renderComments) => {
  const commentsUl = document.querySelector('.comments')
  const text = document.querySelector('.add-form-text')

  commentsUl.addEventListener('click', (event) => {
    event.stopPropagation()

    const likeButton = event.target.closest('.like-button')
    const commentEl = event.target.closest('.comment')

    if (likeButton && commentEl) {
      const id = commentEl.dataset.id
      const comment = commentsAll.find((c) => c.id.toString() === id)

      if (!comment) {
        return
      }

      if (comment.isLiked) {
        comment.likes--
        comment.isLiked = false
      } else {
        comment.likes++
        comment.isLiked = true
      }

      renderComments()
      return
    }

    if (commentEl) {
      const id = commentEl.dataset.id
      const originalComment = commentsAll.find((c) => c.id.toString() === id)

      if (originalComment) {
        text.value = `>${originalComment.text}\n`
        text.focus()
      }
    }
  })
}
