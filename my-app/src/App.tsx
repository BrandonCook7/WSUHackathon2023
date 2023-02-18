import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuestionFill from './QuestionFill'
import QuestionCS from './QuestionCS'
import QuestionQuiz from './QuestionQuiz'

// type Props = {
//   question_prompt: string,
//   answers: string[],
//   answer: Number,
// }


// let temp: Props = {
//     question_prompt: "What diasdasd",
//     answers: ["hello", "dsd", "jasdsadasddfs"],
//     answer: 2,
// } as Props

function App() {
  const [count, setCount] = useState(0)
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
  return (
    //<QuestionFill question_prompt={'dsadsad'} answers={["dsadas","ds","asd"]} answer={2}/>
    //<QuestionCS question_prompt={'What is the sorting algorithm'} answers={["Bubble Sort", "Insertion Sort", "Merge Sort"]} answer={2} code_snippet={code_snip} language={'Python'}/>
    <QuestionQuiz question_prompt={'How do you declare a constant'} answers={['const', 'let', 'any']} answer={1}></QuestionQuiz>
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  )
}

export default App
