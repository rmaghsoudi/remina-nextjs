import styles from '../styles/Home.module.css'

function Todos({ todos }) {
  return(
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Todos Page
      </h1>
        <p className={styles.description}>
          Manage all of your To-dos here.
        </p>

        <div className={styles.grid}>
          {todos.map(todo => (
            <div className={styles.card}>
              <h3>{todo.description}</h3>
              <p>XP: {todo.xp}</p> 
              <input type="checkbox" checked={todo.completed} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get todos belonging to logged in user
  const res = await fetch(`${process.env.API_URL}/todos?${new URLSearchParams({ user_id: 1 })}`);
  const todos = await res.json();

  // By returning { props: { todos } }, the Todos component
  // will receive `todos` as a prop at build time
  return {
    props: {
      todos,
    },
  };
}

export default Todos
