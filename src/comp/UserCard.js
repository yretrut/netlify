import React from "react";
import UserAvatar from "./UserAvatar";
const UserCard = (props) => {
  return (
    <div className="userCard">
      <UserAvatar src={props.user.picture.large} width={120} height={100} />
      <p>
        {props.user.name.first} {props.user.name.last}
      </p>
      <p>From {props.user.location.city}</p>
      <p>Phone: {props.user.phone}</p>
    </div>
  );
};
export default UserCard;
