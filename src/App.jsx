import React from "react";
import { UserProvider } from "./contexts/UserContext";
import RoutesComponent from "./routes/routes";

function App() {
  return (
    <UserProvider>
      <RoutesComponent />
    </UserProvider>
  );
}

export default App;