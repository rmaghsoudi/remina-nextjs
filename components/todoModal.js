import styles from '../styles/Home.module.css'

function TodoModal({ todo }) {

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <form>
          <label htmlFor="description" />
          <input type="text" id="description" name="description" defaultValue={todo.description} required />
          <label htmlFor="duedate" />
          <input type="date" id="duedate" name="duedate" />
          <label htmlFor="duetime" />
          <input type="time" id="duetime" name="duetime" />
          <label htmlFor="completed" />
          <input type="checkbox" id="completed" name="completed" defaultChecked={todo.completed} />
          <button type="submit">Submit &rarr;</button>
        </form>
      </div>
    </div>
  );
}


export default TodoModal