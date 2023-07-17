import React from "react";
import "./UserDetail.scss";
import { useSearchParams } from "react-router-dom";
import CancelIcon from "../../assets/cancel-icon.svg";
import { useSelector } from "react-redux/es/hooks/useSelector";
const UserDetail = ({ setDetailModal }) => {
  const users = useSelector((state) => state.users.users);
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get("user-detail");
  const user = users.find((el) => el.id == userId);
  const closeModal = () => {
    setDetailModal(false);
    setSearchParams({});
  };
  return (
    <React.Fragment>
      <div className="detail-modal">
        <div className="publicity">
          <img
            src={`/data/photos/${user.photo}`}
            alt="profile-photo"
            className="avatar"
          />
          <span className="name">{user.name}</span>
          <span className="position">{user.position}</span>
        </div>
        <div className="contact">
          <div className="phone row">
            <span className="title">Phone:</span>
            <span className="value">{user.phone}</span>
          </div>
          <div className="url row">
            <span className="title ">URL:</span>
            <a href="/" className="value">
              https://example.com
            </a>
          </div>
          <div className="email row">
            <span className="title">Email:</span>
            <a href="/" className="value">
              {user.email}
            </a>
          </div>
        </div>
        <button className="sendMessage">Send Message</button>
        <img
          src={CancelIcon}
          alt="cancel"
          className="cancel"
          onClick={closeModal}
        />
      </div>
      <div className="filter" onClick={closeModal}></div>
    </React.Fragment>
  );
};

export default UserDetail;
// {
//     "id": 1,
//     "name": "Geordan Aaryn",
//     "nickname": "@geordanaaryn",

//     "position": "Chief Executive Officer",
//     "photo": "1.jpg"
//   },
