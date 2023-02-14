import React from "react";


const SingleComment = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.picture} alt="profile pic" className="profile-picture" />
            </a>

            <div className="content">
                <a href="/" className="author">{props.name}</a>

                <div className="date">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )

}
export default SingleComment