import styles from './aboutStyles.module.css'
import { useContext } from 'react'
import CurrentUserContext from '../../context/user/currentUserContext.js'

function About() {
  const { currentUser } = useContext(CurrentUserContext)

  return (
    <>
      <div className={styles.about}>
        <div className={styles.aboutCard}>
          <p className={styles.text}>
            Ramen Reviews was created by Michael Moradi, a fullstack developer 
            who has had a weird obsession with ramen ever since watching Naruto. 
            It started out as a fun thing with a great friend which later became the
            inspiration for this project. If you're interested in hiring Mike,
            check out his LinkedIn profile 
            <a className={styles.link} href='https://www.linkedin.com/in/michael-moradi/'> HERE</a>.
          </p>
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.aboutCard}>
          <img src={currentUser.avatar}/>
        </div>
      </div>

    </>
  )
}

export default About