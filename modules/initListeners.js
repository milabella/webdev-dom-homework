export function commentsListener(
    commentsUl,
    commentsAll,
    formComment,
    renderComments,
) {
    commentsUl.addEventListener('click', (event) => {
        event.stopPropagation()
        if (event.target.classList.contains('like-button')) {
            const index = event.target.dataset.index
            const comment = commentsAll[index]

            if (comment.isLiked === true) {
                comment.likes--
                comment.isLiked = false
            } else {
                comment.likes++
                comment.isLiked = true
            }

            renderComments()
            return
        }

        const commentEl = event.target.closest('.comment')
        if (commentEl) {
            const index = commentEl.dataset.index
            const originalComment = commentsAll[index]

            if (originalComment) {
                formComment.value = `> ${originalComment.comment}`
                formComment.focus()
            }
        }
    })
}
