export function commentsListener(
    comments,
    commentsAll,
    formComment,
    renderUsers,
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

            renderUsers()
        }

        const commentEl = event.target.closest('.comment')
        if (commentEl) {
            const allCommentEls = Array.from(
                document.querySelectorAll('.comment'),
            )
            const index = allCommentEls.indexOf(commentEl)

            const originalComment = commentsAll[index]
            formComment.value = `> ${originalComment.comment}`
            formComment.focus()
        }
    })
}
