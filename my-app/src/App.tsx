import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { supabase } from './supabaseClient'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { Session } from '@supabase/supabase-js'

function App() {
  const [ session, setSession ] = useState<any>({});
  

  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);
    // if session === null DO NOT RENDER
  })

  function logOut() {
    supabase.auth.signOut();
  }

  return (
    <div className="App">
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }}/>
      <button onClick={logOut}></button>
    </div>
  )
}

export default App
