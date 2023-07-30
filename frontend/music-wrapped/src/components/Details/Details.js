import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Details() {
  const [auth, setAuth] = useState();
  const [token, setToken] = useState();
  const [choice, setChoice] = useState();
  let [params, setParams] = useSearchParams();

  useEffect(() => {
    setAuth(params.get('auth'))
    setToken(params.get('access_token'))
    setChoice(params.get('choice'))
  }, [])

  return (
    <div>
      <p>
        Auth : {auth}
        token : {token}
        choice : {choice}
      </p>

    </div>
  )
}
