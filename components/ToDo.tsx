import React, { Dispatch, SetStateAction, useContext } from 'react';
import { useEffect, useState } from 'react';
import { UserContext } from '../store';
import { supabase } from '../utils/supabaseClient';
import { definitions } from "../types/supabase";
import { User } from '@supabase/supabase-js';
import AddToDo from './AddToDo';
import OverviewCard from './OverviewCard';

const Todos = () : JSX.Element=> {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<Array<definitions['todos']>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { user } : { user: User } = useContext(UserContext);

  const selectTodos = async () => {
    const { data } = await supabase
      .from<definitions['todos']>('todos')
      .select("*")
      .order("id", { ascending: false });
    if (data) {
      setLoading(false);
      setTodos(data);
      setCount(data.filter(x => !x.is_completed).length);
    }
  }

  const calculatePercentageBar = (remaining: number, total: number) => {
    return `${(Math.abs(remaining - total)/total) * 100}%`
  }
  
  useEffect(() => {
    selectTodos();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className="Todo-card">
      <div className="App-header">
        <h2>My To Dos</h2>
        <OverviewCard
          count={count}
          todos={todos}
          taskProgress={calculatePercentageBar(count, todos.length)}
          user={user}
        />
      </div>
      <AddToDo selectToDos={selectTodos} user={user} />
      <div className="List-view">
        {todos &&
          todos.map((todoItem) => (
            <Todo
              key={todoItem.id}
              {...todoItem}
              setTodos={setTodos}
              selectTodos={selectTodos}
            />
          ))}
      </div>
    </div>
  );
}

type ToDoType = {
  setTodos: Dispatch<SetStateAction<Array<definitions['todos']>>>,
  selectTodos: () => void,
} & definitions['todos']

const Todo = ({ id, is_completed, task_name: task, setTodos, selectTodos } : ToDoType) => {
  const [todo, setTodo] = useState(task || '');
  const [completed, setCompleted] = useState(is_completed);

  const onEditTodo = async (id: number) => {
    if (todo === "") return;
    const { data, error } = await supabase
      .from<definitions['todos']>('todos')
      .update({ task_name: todo })
      .match({ id })
      console.log('fish', data, error)
  };

  const onCompleteTodo = async (id: number) => {
    const { data, error } = await supabase
      .from<definitions['todos']>('todos')
      .update({ is_completed: !completed })
      .match({ id })
      console.log('complete', data, error)
      if (!error) {
        selectTodos();
        setCompleted((prev) => !prev);
      }
  }

  const onDeleteTodo = async () => {
    const { error } = await supabase
      .from<definitions['todos']>('todos')
      .delete()
      .match({ id })
    if (!error) {
      selectTodos();
      setTodos((prev) => prev.filter(todoItem => todoItem.id !== id))
    }
  };

  return (
    <div key={id} className="flex relative mt-2">
      <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
        <input
          checked={completed}
          type="checkbox"
          onChange={(e) => {
            e.preventDefault();
            onCompleteTodo(id);
          }}
        />
      </span>
      <input
        className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="text"
        value={todo}
        onChange={(e) => {
          const { value } = e.target;
          setTodo(value);
        }}
      />
      {task !== todo && (
        <span className="cursor-pointer inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
          <i className="far fa-save" onClick={() => onEditTodo(id)}></i>
        </span>
      )}
      <span className="cursor-pointer rounded-r-md inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
        <i
          className="far fa-trash-alt"
          onClick={onDeleteTodo}
        ></i>
      </span>
    </div>
  );
};

export default Todos;