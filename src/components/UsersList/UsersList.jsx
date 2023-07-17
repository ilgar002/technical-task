import React from "react";
import "./UsersList.scss";
import UserItem from "../UserItem/UserItem";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../store/actions/user";
const UsersList = ({setDetailModal}) => {
  const users = useSelector((state) => state.users.users);
  const [allVisible, setAllVisible] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsers(allVisible));
  }, [allVisible]);

  return (
    <div className="user-list">
      {users?.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            photo={user.photo}
            name={user.name}
            nickname={user.nickname}
            setDetailModal={setDetailModal}
          />
        );
      })}
      {allVisible || (
        <button className="viewAll" onClick={() => setAllVisible(true)}>
          View all
        </button>
      )}
    </div>
  );
};

export default UsersList;
