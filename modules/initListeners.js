export function commentsListener(
    comments,
    commentsAll,
    formComment,
    renderComments,
) {
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
