import React, { useEffect, useState } from 'react';

function SubmitForm(props) {
    //parkName and username in props
    const [date, setDate] = useState('');
    const [rating, setRating] = useState('');
    const [comments, setComments] = useState('')

    function submitReview() {
        console.log('sending a fetch request!')
        console.log('sending in body: ', 'username:', props.username, 'parkName:', props.parkName, 'rating:', rating, 'comments:', comments);
        fetch(`http://localhost:3000/submitReview`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: props.username,
                location: props.parkName,
                rating: rating,
                review: comments
            })
        })
            .then((result) => result.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }

    const submitPost = (e) => {
        e.preventDefault();
        submitReview();
    }


    return (
        <div className="reviewForm">
            <h5 className="addReview">Add a Review:</h5>


            <form className="form" onSubmit={e => { submitPost(e) }} >
                <label>
                    Date Visited:
                    <input type="date" required value={date} onChange={(e => setDate(e.target.value))} />
                </label>
                <label htmlFor="rating">Rating:</label>
                <select name="rating" id="rating" required value={rating} onChange={(e => setRating(e.target.value))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label>
                    Comments:
                    <input type="text" value={comments} onChange={(e => setComments(e.target.value))} />
                </label>
                <input type="submit" value="Submit" className="btn btn-light" />
            </form>

        </div>
    )
}

export default SubmitForm;






/*
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
*/