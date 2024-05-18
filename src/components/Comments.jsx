import React from "react";
import Comment from "./Comment.jsx";
import SubmitForm from "./SubmitForm.jsx";

function Comments(props) {
  const comments = [];
  for (let i = 0; i < props.posts.length; i++) {
    comments.push(<Comment key={`comment${i}`} post={props.posts[i]} />);
  }

  return (
    <div>
      <div>
        <SubmitForm
          parkName={props.parkName}
          setPosts={props.setPosts}
          setRating={props.setRating}
          username={props.username}
        />
        {comments}
      </div>
    </div>
  );
}

export default Comments;
