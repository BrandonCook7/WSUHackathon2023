import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuestionFill from './QuestionFill'
import QuestionCS from './QuestionCS'
import QuestionQuiz from './QuestionQuiz'
import { supabase } from './supabaseClient'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { Session } from '@supabase/supabase-js'

function App() {
  const [ session, setSession ] = useState<any>({});
  
  let code_snip = `
  def bubbleSort(arr):
      n = len(arr)
      swapped = False
      for i in range(n-1):
          for j in range(0, n-i-1):
              if arr[j] > arr[j + 1]:
                  swapped = True
                  arr[j], arr[j + 1] = arr[j + 1], arr[j]
          if not swapped:
              return
  `
  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);
    // if session === null DO NOT RENDER
  })

  function logOut() {
    supabase.auth.signOut();
  }

  return (
    //<QuestionFill question_prompt={'dsadsad'} answers={["dsadas","ds","asd"]} answer={2}/>
    //<QuestionCS question_prompt={'What is the sorting algorithm?'} answers={["Bubble Sort", "Insertion Sort", "Merge Sort"]} answer={2} code_snippet={code_snip} language={'Python'}/>
    //<QuestionQuiz question_prompt={'How do you declare a constant'} answers={['const', 'let', 'any']} answer={1}></QuestionQuiz>
    <div className="App">
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }}/>
      <button onClick={logOut}></button>
    </div>
  )
}

export default App
