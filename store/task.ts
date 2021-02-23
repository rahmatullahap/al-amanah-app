import { v4 as uuid } from 'uuid';

export interface TaskState {
  list: Task[];
}

export interface Task {
  id: string;
  createdAt: Date;
  done: boolean;
  title: string;
  description: string;
}

export interface TaskData {
  id?: string;
  title?: string;
  description?: string;
}

export function state(): TaskState {
  return {
    list: []
  };
}

export const mutations = {
  /**
   * create new task
   */
  add(state: TaskState, data: TaskData) {
    const task = {
      id: uuid(),
      createdAt: new Date(),
      done: false,
      title: data.title,
      description: data.description
    };
    state.list.unshift(task);
  },
  /**
   * remove a task
   */
  remove(state: TaskState, id: string) {
    const idx = state.list.findIndex((task) => task.id === id);
    state.list.splice(idx, 1);
  },
  /**
   * update a task
   */
  edit(state: TaskState, data: TaskData) {
    const idx = state.list.findIndex((task) => task.id === data.id);
    if (data.title) {
      state.list[idx].title = data.title;
    }
    if (data.description) {
      state.list[idx].description = data.description;
    }
  },
  /**
   * mark task as done
   */
  done(state: TaskState, id: string) {
    const idx = state.list.findIndex((task) => task.id === id);
    state.list[idx].done = true;
  },
  /**
   * mark task as not done
   */
  undone(state: TaskState, id: string) {
    const idx = state.list.findIndex((task) => task.id === id);
    state.list[idx].done = false;
  }
};
