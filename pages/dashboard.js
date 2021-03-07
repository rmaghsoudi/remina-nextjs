import { getUser } from '../hooks/apiCalls'
import styles from '../styles/Home.module.css'

function Dashboard() {
  const { user, isLoading, isError } = getUser(1)
  // TODO: Create a <Loading /> and an <Error /> component
  if (isLoading) return <div>We loading....</div>
  if (isError) return <div>We ran into an Error :(</div>

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {user.username}'s Dashboard
        </h1>
        <p className={styles.description}>
          A level {user.level} PLACEHOLDER <br />
          <label htmlFor="xp-bar">XP: </label>
          <progress id="xp-bar" max={user.xp_to_lvlup} value={user.xp}>  {user.xp}/{user.xp_to_lvlup}</progress>
        </p>

        <div className={styles.grid}>
          <a href="/todos" className={styles.card}>
            <h3>Todos &rarr;</h3>
            <p>Check out your pending to-dos and create some more!</p>
          </a>

          <a href="/habits" className={styles.card}>
            <h3>Habits &rarr;</h3>
            <p>Check out your habit trends and create new ones!</p>
          </a>

          <a href="/goals" className={styles.card}>
            <h3>Goals &rarr;</h3>
            <p>Check out your goals and create new ones!</p>
          </a>

        </div>
      </main>
    </div>
  );
}


export default Dashboard;
