import styles from './Tasks.module.css';
import clipboard from '../assets/Clipboard.svg';
import { Task } from './Task';
import { TaskType } from '../App';

interface Props {
  tasks: TaskType[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
  const tasksAmount = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.tasksInfo}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksAmount}</span>
        </div>

        <div>
          <p className={styles.completedTasksText}>Concluídas</p>
          <span>{completedTasks} de {tasksAmount}</span>
        </div>
      </header>

      <div className={styles.tasksContainer}>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          )
        })}

        {tasks.length <= 0 && (
          <section className={styles.noTaskContainer}>
            <img src={clipboard} alt="Ícone de prancheta" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </section>
        )}
      </div>
    </section>
  )
}