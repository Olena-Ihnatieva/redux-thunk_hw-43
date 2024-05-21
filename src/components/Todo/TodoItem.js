import {useDispatch} from 'react-redux';
import {toggleTodo, deleteTodo} from '../../store/TodoSlice';
import styles from './todo.module.css';

export default function TodoItem({todo}) {
  const dispatch = useDispatch();
  const {id, title, done} = todo;

  const handleCheckboxChange = () => {
    dispatch(toggleTodo({id}));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({id}));
  };

  return (
    <div className={styles.todo_item}>
      <div className={styles.input_wrapper_item}>
        <input
          type="checkbox"
          checked={done}
          onChange={handleCheckboxChange}
          className={styles.todo_checkbox}
        />
        <div className={`${styles.todo_title} ${done ? styles.checked : ''}`}>
          {title}
        </div>
      </div>
      <div className={styles.todo_btn} onClick={handleDeleteTodo}>
        Delete
      </div>
    </div>
  );
}
