import styles from "../../styles/Navbar.module.css"

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
          <ul className={styles.ul}>
              <li className={styles.li}>WORK</li>
              <li className={styles.li}>JOBS</li>
              <li className={styles.li}>BLOG</li>
              <li className={styles.li}>CONTACT</li>
          </ul>

      </div>
      <div className={styles.title}>
         <span className={styles.spantitle}>Open Positions</span>
      </div>
      <div className={styles.subTitle}>
        <span className={styles.spansubtitle}>Current listings for web design and front-end development jobs.</span>
      </div>
    </div>
  )
}

export default Navbar
