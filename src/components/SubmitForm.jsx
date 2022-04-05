import React, { useEffect, useState } from 'react';
import postsController from '../../server/controllers/postsController';

function SubmitForm(props) {
    //parkName and username in props
    const [date, setDate] = useState('');
    const [rating, setRating] = useState('');
    const [comments, setComments] = useState('')

    // const submitPost = (e) => {
    //     e.preventDefault();
    //     try {
    //       const body = {
    //         username: props.username,
    //         location: props.location,
    //         rating: rating,
    //         review: comments
    //       }
    //       const metaData = {
    //           method: 'POST',
    //           headers: { "Content Type": "application/json"},
    //           body: JSON.stringify(body)
    //       }
    //       fetch(`http://localhost:3000/submitReview`, metaData)
    //         .then((result) => result.json())
    //         .then((data) => console.log(data))
    //         .catch((err) => console.log(err))
    //     }
    //     catch {

    //     }
    // }
    // { <form onSubmit={e => {submitPost(e)}}  > }

    return (
        <div>
            <h2>Add a Review:</h2>

            
            <form>
                <label>
                    Date Visited:
                    <input type="date" required value={date} onChange={(e => setDate(e.target.value))} />
                </label>
                <label>
                    Rating:
                    <input type="radio" id="1" name="rating" value={rating} onChange={(e => setRating(e.target.value))} />
                    <label for="1">1</label>
                    <input type="radio" id="2" name="rating" value={rating} onChange={(e => setRating(e.target.value))} />
                    <label for="2">2</label>
                    <input type="radio" id="3" name="rating" value={rating} onChange={(e => setRating(e.target.value))} />
                    <label for="3">3</label>
                    <input type="radio" id="4" name="rating" value={rating} onChange={(e => setRating(e.target.value))} />
                    <label for="4">4</label>
                    <input type="radio" id="5" name="rating" value={rating} onChange={(e => setRating(e.target.value))} />
                    <label for="5">5</label>
                </label>
                <label>
                    Comments:
                    <input type="text" value={comments} onChange={(e => setComments(e.target.value))} />
                </label>
                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default SubmitForm;