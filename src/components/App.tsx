import style from './app.module.scss'

import webPackLogo from '../assets/images/webPackLogo.png'
import reactLogo from '../assets/images/reactLogo.svg'
import Counter from './Counter/Counter'

function App() {
  return (
    <div className={style.app}>
      <h1 className={style.app__title}>Hello WebPack!</h1>
      <Counter />
      <div className={style.app__logos}>
        <a href="https://webpack.js.org">
          <img src={webPackLogo} alt="" className={style.logo} />
        </a>
        <a href="https://reactjs.org">
          <img src={reactLogo} alt="" className={style.logo} />
        </a>
      </div>
    </div>
  )
}

export default App
