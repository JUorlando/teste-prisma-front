import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "../components/UserList";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
