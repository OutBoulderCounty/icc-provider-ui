import { useEffect } from "react"


function LocalAuth() {
  const url = window.location.search;
  const urlSearch = new URLSearchParams(url);
  const token = urlSearch.get("token");

  useEffect(() => {

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
        await localStorage.setItem('session_token', data.session_token);
    })();
  })

  return (
    <div>
      <h1>{token}</h1>
    </div>
  )
}

export default LocalAuth
