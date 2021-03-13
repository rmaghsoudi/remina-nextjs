import { useState } from "react";
import TodoModal from "../components/todoModal";
import { getTodos } from "../hooks/apiCalls";
import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";

function Todos() {
  const { todos, isLoading, isError } = getTodos(1);
  const [modalShow, setModalShow] = useState(false);
  // TODO: Create a <Loading /> and an <Error /> component
  if (isLoading) return <div>We loading....</div>;
  if (isError) return <div>We ran into an Error :(</div>;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Todos Page</h1>
        <Button variant="primary">Add Todo &#43; </Button>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch TodoModal
        </Button>
        <div className={styles.grid}>
          {todos.map((todo) => (
            <div key={todo.id} className={styles.card}>
              <h3>{todo.description}</h3>
              <p>{todo.xp}XP</p>
              {todo.dueDate && <p>{todo.dueDate}</p>}
              <input type="checkbox" defaultChecked={todo.completed} />
            </div>
          ))}
        </div>
        <TodoModal show={modalShow} onHide={() => setModalShow(false)} />
      </main>
    </div>
  );
}

export default Todos;
