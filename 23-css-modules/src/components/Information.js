import './Info.css'
import styles from './Info.module.css'

console.log(styles)

function Information() {
  return (
    <div className={styles.info}>
      <h1>Hello from Information component</h1>
      <h2>heading in the information component</h2>
      <button className="my-button">
        Click me in the information component!
      </button>
      <button className={styles.myOtherButton}>Button with local css styles</button>
    </div>
  )
}

export default Information
