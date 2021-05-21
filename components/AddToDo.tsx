
import React from 'react';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import TextFormField from '../components/TextInputField';
import { supabase } from '../utils/supabaseClient';
import { definitions } from "../types/supabase";
import { User } from '@supabase/supabase-js';

type AddToDoProps = {
  user: User,
  selectToDos: (val: (val: Array<definitions['todos']>) => void) => void,
}

const AddToDo = ({ selectToDos, user } : AddToDoProps) : JSX.Element => {
  const [task, setTask] = useState("");
  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (task === '') return;
    const { data, error } = await supabase
      .from<definitions['todos']>('todos')
      .insert({ task_name: task, user_id: user.id })
      .single();

      console.log(data, error)
      if (!error) {
        selectToDos((prevTodos) => [data, ...prevTodos]);
        setTask('');
      }
  };
  return (
    <form className="Input-container">
      <TextFormField
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add task"
      />
      <PrimaryButton onClick={onSubmit} type="submit">Add <i className="fas fa-plus-circle"></i></PrimaryButton>
    </form>
  );
};

export default AddToDo;
