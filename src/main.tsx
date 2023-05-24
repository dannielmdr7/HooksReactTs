import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { MainApp } from './08-UseContext/MainApp'
import { BrowserRouter } from 'react-router-dom'
// import { CallBackHook } from './06-Memos/CallBackHook'
// import { CounterApp } from './01-UseState/CounterApp'
// import { CounterAppHook } from './01-UseState/CounterAppHook'
// import { FocusScreen } from './04-UseRef/FocusScreen'
// import { HooksApp } from './HooksApp'
// import { Layout } from './05-UseLayoutEffect/Layout'
// import { MemoHook } from './06-Memos/MemoHook'
// import { Memorize } from './06-Memos/Memorize'
// import { MultipleCustomHook } from './03-example/MultipleCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { SimpleFormHook } from './02-useEffect/SimpleFormHook'
// import './07-UseReducer/IntroReducer'
// import { TodoApp } from './07-UseReducer/TodoApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
      {/* <TodoApp /> */}
      {/* <CallBackHook /> */}
      {/* <MemoHook /> */}
      {/* <Memorize /> */}
      {/* <Layout /> */}
      {/* <CounterApp />  */}
      {/* <CounterAppHook /> */}
      {/* <FocusScreen /> */}
      {/* <HooksApp /> */}
      {/* <MultipleCustomHook /> */}
      {/* <SimpleForm /> */}
      {/* <SimpleFormHook /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
