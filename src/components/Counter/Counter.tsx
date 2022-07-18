import { useState } from 'react'

function Counter() {
  const [counterValue, setCounterValue] = useState(0)

  return (
    <div className="counter">
      <div className="counter__value" style={{ color: 'white' }}>
        Current value: {counterValue}
      </div>
      <button
        onClick={() => setCounterValue((counterValue) => counterValue + 1)}
        className="counter__btn"
      >
        Increace value by 1
      </button>
    </div>
  )
}

export default Counter
