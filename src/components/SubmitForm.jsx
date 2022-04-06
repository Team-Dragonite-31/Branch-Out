import React, { useEffect, useState } from 'react';

function SubmitForm(props) {
    //parkName and username in props
    const [date, setDate] = useState('');
    const [userRating, setUserRating] = useState('1');
    const [comments, setComments] = useState('')

    function submitReview() {
        console.log('sending a fetch request!')
        console.log('sending in body: ', 'username:', props.username, 'parkName:', props.parkName, 'rating:', userRating, 'comments:', comments);
        fetch(`http://localhost:3000/submitReview`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: props.username,
                location: props.parkName,
                rating: Number(userRating),
                review: comments,
                date: date
            })
        })
            .then((result) => result.json())
            .then((data) => {
                props.setPosts(data.posts)
                props.setRating(data.rating)
            })
            .catch((err) => console.log(err))
    }

    const submitPost = (e) => {
        e.preventDefault();
        if (props.username) submitReview();
        else alert('Please login to make a comment')
    }


    return (
      <div className='reviewForm'>
        <h5 className='addReview'>Add a Review:</h5>
        <form
          className='form'
          onSubmit={(e) => {
            submitPost(e);
          }}
        >
          <label className='date'>
            Date Visited:
            <input
              type='date'
              className='date'
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label htmlFor='userRating'>Rating:</label>
          <select
            name='userRating'
            id='userRating'
            required
            value={userRating}
            onChange={(e) => setUserRating(e.target.value)}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          <div>
            <label>
              Comments:
              <input
                type='text'
                className='commentForm'
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </label>
            <input type='submit' value='Submit' className='btn btn-light' />
          </div>
        </form>
      </div>
    );
}

export default SubmitForm;
