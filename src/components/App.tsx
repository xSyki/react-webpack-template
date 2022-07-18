import '../styles/styles.scss'

import webPackLogo from '../assets/images/webPackLogo.png'
import reactLogo from '../assets/images/reactLogo.svg'
import Counter from './Counter/Counter'

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Hello WebPack!</h1>
      <Counter />
      <div className="app__logos">
        <a href="https://webpack.js.org">
          <img src={webPackLogo} alt="" className="logo" />
        </a>
        <a href="https://reactjs.org">
          <img src={reactLogo} alt="" className="logo" />
        </a>
      </div>
    </div>
  )
}

export default App
