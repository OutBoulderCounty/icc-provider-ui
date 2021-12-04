import { useEffect } from "react"
import Loader from "./loader";

function LocalAuth() {
  useEffect(() => {
    const url = window.location.search;
    const urlSearch = new URLSearchParams(url);
    const token = urlSearch.get("token");

    if (token) {
      (async () => {
          const res = await fetch('http://localhost:8080/authenticate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              token: token
            })
          })
          const data = await res.json()
          await localStorage.setItem('sessionToken', data.session_token);
          await localStorage.removeItem('userId');
          window.location.href = '/';
      })();
    }
  })

  return (
    <div>
      <Loader></Loader>
    </div>
  )
}

export default LocalAuth
