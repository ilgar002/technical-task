import React from "react";
import "./style/index.scss";
import UsersList from "./components/UsersList/UsersList";
import UserDetail from "./components/UserDetail/UserDetail";
const App = () => {
  const [detailModal, setDetailModal] = React.useState(false);
  return (
    <div className="container">
      <UsersList setDetailModal={setDetailModal} />
      {detailModal && <UserDetail setDetailModal={setDetailModal} />}
    </div>
  );
};

export default App;
