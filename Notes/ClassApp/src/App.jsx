import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import MyComponent from './MyComponent'
// import ShowProps from './ShowProps'
import Comment from './Comment'

function App() {
  const [count, setCount] = useState(0)

  const name = { first: 'Gareth', last: 'Wootton'}
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* {formatName(name)} */}
      {/* <MyComponent /> */}
      <ShowProps name='Gareth' location='Tauranga'/>
      <Comment user={comment.author} date={comment.date} text={comment.text} />
    </div>
  )
}

export default App
