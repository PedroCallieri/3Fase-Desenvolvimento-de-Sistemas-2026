import { Task } from "../models/Task";

export class TaskViewModel {
  private tasks: Task[] = [];

  getAll() {
    return this.tasks;
  }

  create(task: Task) {
    if (!task.title) {
      throw new Error("Título obrigatório");
    }
    
    this.tasks.push({
      id: task.id,
      title: task.title,
      done: false
    });
  }

  toggle(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (!task) return;

    task.done = !task.done;
  }

  stats() {
    return {
      total: this.tasks.length,
      done: this.tasks.filter(t => t.done).length
    };
  }
}