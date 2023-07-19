import { ChangeEvent, FormEvent, useState } from 'react';
import plus from '../assets/plus.svg'
import styles from './NewTask.module.css';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function NewTask({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function handleNewTaskTitleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTitle(event.target.value);
  }

  return (

    <form className={styles.newTaskForm} onSubmit={handleCreateNewTask} >
      <textarea
        name="task"
        placeholder="Adicione uma nova tarefa"
        required
        onChange={handleNewTaskTitleChange}
        value={title}
      />

      <button type="submit" /*disabled={isNewTaskEmpty}*/>
        Criar <img src={plus} />
      </button>
    </form >

  );
}