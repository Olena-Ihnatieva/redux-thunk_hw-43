import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../store/TodoSlice';
import styles from './todo.module.css';

export default function NewTodo() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo({ title: newTodo }));
      setNewTodo('');
    }
  };

  return (
    <div className={styles.input_wrapper}>
      <input
        type='text'
        value={newTodo}
        placeholder='New task'
        className={styles.todo_input}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <div className={styles.add_todo} onClick={handleAddTodo}>
        Add
      </div>
    </div>
  )
}