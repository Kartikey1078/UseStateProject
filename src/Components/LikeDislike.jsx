import React, { useState } from 'react';
import './LikeDislike.css'; 

function LikeDislike() {
    let [checkCount, setCount] = useState({ like: 0, dislike: 0 });

    function handleChangeONLike() {
        setCount((prev) => ({
            ...prev,
            like: prev.like + 1
        }));
    }

    function handleChangeONDisLike() {
        setCount((prev) => ({
            ...prev,
            dislike: prev.dislike + 1
        }));
    }

    return (
        <div className="like-dislike-container">
            <h2>Like & Dislike Tracker</h2>
            <div className="input-group">
                <label>Total Reactions</label>
                <input type="text" value={checkCount.like + checkCount.dislike} readOnly />
            </div>
            <div className="input-group">
                <label>Likes</label>
                <input type="text" value={checkCount.like} readOnly />
            </div>
            <div className="input-group">
                <label>Dislikes</label>
                <input type="text" value={checkCount.dislike} readOnly />
            </div>
            <div className="button-group">
                <button className="like-btn" onClick={handleChangeONLike}>👍 Like</button>
                <button className="dislike-btn" onClick={handleChangeONDisLike}>👎 Dislike</button>
            </div>
        </div>
    );
}

export default LikeDislike;
