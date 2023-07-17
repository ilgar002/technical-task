import React from "react";
import "./UserItem.scss";
import { useSearchParams } from "react-router-dom";
const UserItem = ({ id, photo, name, nickname, setDetailModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="user-item">
      <img src={`/data/photos/${photo}`} alt="profile" className="avatar" />
      <div className="publicity">
        <span className="name">{name}</span>
        <span className="nickname">{nickname}</span>
      </div>
      <button
        className="view"
        onClick={() => {
          setDetailModal(true);
          setSearchParams({ "user-detail": id });
        }}
      >
        View
      </button>
    </div>
  );
};

export default UserItem;
