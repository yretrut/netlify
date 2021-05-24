import React from "react";
import UserCard from "./UserCard";
const UserList = (props) => {
  return (
    <div>{props.users && props.users.map((u) => <UserCard user={u} />)}</div>
  );
};
export default UserList;
