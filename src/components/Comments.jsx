import React from 'react';
import Comment from './Comment.jsx';

function Comments(props){
    //form for submissions
    //all comments in a div
    console.log(props.posts);
    const comments = [];
    for (let i = 0; i < props.posts.length; i++){
        comments.push(
            <Comment key={`comment${i}`} post = {props.posts[i]}/>
        )
    }
    return (
        <div>
            {comments}
        </div>
    )
}

export default Comments