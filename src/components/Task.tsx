import { Trash, CheckCircle, Circle } from 'phosphor-react';
import styles from './Task.module.css'
import { TaskType } from '../App';

interface Props {
  task: TaskType;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {

  function handleDeleteTask() {
    onDelete(task.id);
  }

  function handleCompleteTask() {
    onComplete(task.id);
  }

  return (
    <div className={styles.task}>
      <div className={styles.checkTaskContainer}>

        <button
          className={styles.checkTaskButton}
          onClick={handleCompleteTask}
        >
          {task.isCompleted ?
            <CheckCircle size={24} className={styles.checkedTaskCircle} weight="fill" /> :
            <Circle size={24} className={styles.uncheckedTaskCircle} />
          }
        </button>
      </div>

      <p className={task.isCompleted ? styles.completedTaskText : ""} >{task.title}</p>

      <button className={styles.deleteTask} onClick={handleDeleteTask} title="Apagar tarefa">
        <Trash size={24} />
      </button>
    </div>
  );
}