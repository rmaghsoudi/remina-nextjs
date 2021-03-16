import { useState } from "react";
import TodoModal from "../components/todoModal";
import { getTodos } from "../hooks/apiCalls";
import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import FormCheck from "react-bootstrap/FormCheck"

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
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Todo &#43;
        </Button>
        <CardDeck>
          {todos.map((todo) => (
            <Card style={{ width: '18rem' }} key={todo.id}>
              <Card.Body>
                <Card.Title>{todo.description}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{todo.xp}XP</Card.Subtitle>
                {todo.dueDate && <Card.Subtitle className="mb-2 text-muted">{todo.dueDate}</Card.Subtitle>}
                <FormCheck type="checkbox" label="Mark as done" />
                <Card.Link><Button variant="secondary">Edit</Button></Card.Link>
                <Card.Link><Button variant="danger">Delete</Button></Card.Link>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
        <TodoModal show={modalShow} onHide={() => setModalShow(false)} />
      </main>
    </div>
  );
}

export default Todos;
