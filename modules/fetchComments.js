const host = 'https://wedev-api.sky.pro/api/v1/mila-belavina'

export const fetchComments = () => {
  return fetch(host + '/comments', {
    method: 'GET',
  })
    .then((response) => {
      return response.json()
    })
    .then((responseData) => {
      const appComments = responseData.comments.map((comment) => {
        return {
          name: comment.author.name,
          date: comment.date,
          text: comment.text,
          likes: comment.likes,
          isLiked: false,
          id: comment.id,
        }
      })

      return appComments
    })
}

export const postComment = (text, name) => {
  return fetch(host + '/comments', {
    method: 'POST',
    body: JSON.stringify({
      text,
      name,
    }),
  })
    .then((response) => {
      if (response.status === 500) {
        throw new Error('Сервер упал')
      }

      if (response.status === 400) {
        throw new Error('Ошибка запроса')
      }

      if (response.status === 201) {
        return response.json()
      }
    })
    .then(() => {
      return fetchComments()
    })
}
