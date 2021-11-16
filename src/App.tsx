import React from "react";
import Dashboard from "./components/dash";
import Login from "./components/login";

function App() {
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);

    return (
      <>
        {authenticated ? <Dashboard /> : <Login />}
      </>
    );
}

export default App;
