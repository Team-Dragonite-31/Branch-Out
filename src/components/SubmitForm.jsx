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
        submitReview();
    }


    return (
        <div>
            <h2>Add a Review:</h2>


            <form onSubmit={e => { submitPost(e) }} >
                <label>
                    Date Visited:
                    <input type="date" required value={date} onChange={(e => setDate(e.target.value))} />
                </label>
                <label htmlFor="userRating">Rating:</label>
                <select name="userRating" id="userRating" required value={userRating} onChange={(e => setUserRating(e.target.value))}>
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
                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default SubmitForm;
