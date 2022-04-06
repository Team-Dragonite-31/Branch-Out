import React from 'react';
// import '../styling/styles.scss'

function Comment(props) {
    //go in and use the data in post to actually make a nice-looking post
    
    return (
        <div>
            {/* <h1>{JSON.stringify(props.post)}</h1> */}
            <ul className='reviewPost'>
              {/* <li className='postDetails'>Park: {props.post.location} </li> */}
              <li className='postDetails'>Date Visited: {props.post.date} </li>
              <li className='postDetails'>Rating: {props.post.rating} </li>
              <li className='postDetails'>Review: {props.post.review} </li>
            </ul>
        </div>
    )
}

export default Comment;