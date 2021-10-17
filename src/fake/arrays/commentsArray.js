const getCommentsFaker = require("../single/comment");

function getFakeCommentsArray(blogPosts, users, commentsPerPost) {
  const commentsArray = [];
  const createFakeComment = getCommentsFaker(users);

  blogPosts.forEach((curBlogPost) => {
    for (let i = 0; i < commentsPerPost; i++) {
      commentsArray.push(createFakeComment(curBlogPost.id, i + 1));
    }
  });

  return commentsArray;
}


module.exports = getFakeCommentsArray