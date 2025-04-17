export let commentsAll = []

export const updateComments = (newComments) => {
    commentsAll.push(...newComments)
}
