import Dashboard from "./components/dash";
import Login from "./components/login";
import { useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

    return (
      <>
        {authenticated ? <Dashboard /> : <Login />}
      </>
    );
}

export default App;
