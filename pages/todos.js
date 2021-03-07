import { getTodos } from '../hooks/apiCalls'
import styles from '../styles/Home.module.css'

function Todos() {
  const { todos, isLoading, isError } = getTodos(1)
  // TODO: Create a <Loading /> and an <Error /> component
  if (isLoading) return <div>We loading....</div>
  if (isError) return <div>We ran into an Error :(</div>

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Todos Page
        </h1>
        <button className={styles.card}>Add Todo &#43; </button>

        <div className={styles.grid}>
          {todos.map(todo => (
            <div key={todo.id} className={styles.card}>
              <h3>{todo.description}</h3>
              <p>XP: {todo.xp}</p>
              <input type="checkbox" defaultChecked={todo.completed} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}


export default Todos
