import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchTodos} from './store/TodoSlice';
import Todo from './components/Todo';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <Todo />
    </>
  );
}

export default App;
