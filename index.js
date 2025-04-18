import { renderComments } from "./modules/renderComments.js";
import { updateComments } from "./modules/comments.js";
import { fetchComments } from "./modules/fetchComments.js";
import { initAddCommentListener } from "./modules/buttonAddComment.js";
import { initCommentListener } from "./modules/initListeners.js";

const commentsUl = document.querySelector(".comments");

commentsUl.innerHTML = "Комментарии загружаются...";

fetchComments().then((data) => {
  updateComments(data);
  renderComments();
});

initAddCommentListener(renderComments);
initCommentListener(renderComments);
