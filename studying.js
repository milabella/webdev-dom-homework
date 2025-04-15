//data-* attributes are a way to store custom data in HTML elements.
//For example:
//<button class="like-button ${comment.liked ? '-active-like' : ''}" data-index="${index}"></button>
//We are adding a data-index attribute to each button, storing the index of the comment. Now we can access it:
//const index = event.target.dataset.index;
// This gives us the exact position of the comment in the array. Useful when dynamically creating elements.

//calling the function inside eventlistener or outside:
//inside - to re-render the entire list to reflect changes (like a new comment or updated likes)
//outside - (at the bottom) tuns the first time the page loads and displays everything we have in our array
// !!! sometimes functions are one-time handlers and don't need to be reused elsewhere.

//.map(); --- tranforms each comment into a chunk of HTML
//commentsHTML = commentsAll.map() --- we take every item in out array commentsAll and turn it into an HTML string.
// (comment, index) gives us the actual object(comment) and its position in the array (index), which we use to track which comment was clicked

//using square brackets --- []
//const comment = commentsAll[index];
//this is how we access elements in an array by position (grab the corresponsing comment from the array)

//INSIDE ul WE HAVE A SECTION FOR INTERACTION WITH li:

//.closest() --- finds the nearest parent element (or the element itself) that matches the selector:
//const commentEl = event.target.closest(".comment");
//in our code, if we click a heart icon inside the like button inside the comment, .closest(".comment") climbs up the DOM tree to find the comment container --- handy for delegation
//delegation --- setting a single event listener on a parent element instead of adding one to each child
// WE DO: listen on the .comments container and check what exactly was clicked (using event.target)
// WE DON'T: add separate click listener to every .like-button or .comment

//if(commentEl)
//checks if .closest() found a .comment element (the opposite would be if(commentEl === null)), meaning no match, so it's skipped.

//const allCommentEls = Array.from(document.querySelectorAll(".comment"));
//We grab all comment elements currently on the page and turn the NodeList into a regular array (so we can use .indexOf()).
// We convert the NodeList into an array so we can access certain methods. For example:
//we can loop through NodeList with forEach(), BUT we can't use array methods like .indexOf()

//indexOf
//We want to know which comment was clicked
//That index lets us connect the element back to the original comment in commentsAll
//We find the position of the clicked .comment element in the full list of comments on the page, which matches the position in the commentsAll array
// commentsAll() is the array of comment objects in JS
//allCommentEls is our HTML - the list of elements shown in the DOM after we run renderUsers()
//each element in allCommentEls was created BASED ON a corresponding item in commentsAll (and the order is preserved --> UI and data stay synced)

//we assign const originalComment
//to grab the data from the clicked comment and pre-fill the textarea

//focus();
//puts the keyboard cursor in the textarea so the user can start typing immediately (activates a text field)
