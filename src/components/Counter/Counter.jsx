import { useState } from 'react'
import styles from './Counter.module.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section className={styles.counterSection}>
      <h2>Counter Bileşeni</h2>
      <p>Sayaç: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Arttır</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Azalt</button>
    </section>
  )
}

export default Counter
