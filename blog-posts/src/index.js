import React from "react";
import ReactDOM from "react-dom"
import SingleComment from "./SingleComment";
import profile1pic from "./images/images.jfif"
import profile2pic from "./images/photo-1566753323558-f4e0952af115.jfif"
import Profile3pic from "./images/images (1).jfif";
import UserCard from "./UserCard";

const App = () => {

    return (
        <div className="ui comments">
            <UserCard >
                <SingleComment name="jake" date="today at 5:00 PM" text="graet" picture={profile1pic} />
            </UserCard>
            <UserCard>
                <SingleComment name="alex" date="today at 6:00 PM" text="its amazing" picture={profile2pic} />
            </UserCard>
            <UserCard>
                <SingleComment name="sarah" date="today at 7:00 PM" text="not bad" picture={Profile3pic} />
            </UserCard>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector("#root")
)