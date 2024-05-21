import {useSelector} from 'react-redux';
import TodoItem from './TodoItem';
import NewTodo from './NewTodo';
import styles from './todo.module.css';

export default function Todo() {
  const todos = useSelector(state => state.todos.todos);
  const status = useSelector(state => state.todos.status);
  const error = useSelector(state => state.todos.error);

  return (
    <div className={styles.todo_wrapper}>
      <h3 className={styles.todo_list_title}>Todo list</h3>
      <NewTodo />
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}
