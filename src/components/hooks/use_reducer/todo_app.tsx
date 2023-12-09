import { useState } from "react";
import { AddTask } from "./add_task.js";
import { TaskList } from "./task_list.js";
import React, { useReducer } from "react";

const initialTasks: Task[] = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

type Action =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: Task }
  | { type: "deleted"; id: number };

export const taskReducer = (tasks: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: tasks.length,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default:
      return tasks;
  }
};

export function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <>
      <h2>useReducer</h2>

      <h3>Prague Itinerary</h3>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
