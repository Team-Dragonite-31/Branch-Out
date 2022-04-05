import React from 'react';

function Comment(props) {
    //go in and use the data in post to actually make a nice-looking post
    return (
        <div>
            <h1>{JSON.stringify(props.post)}</h1>
        </div>
    )
}

export default Comment;