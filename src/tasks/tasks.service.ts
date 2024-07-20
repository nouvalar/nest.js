import { Injectable } from '@nestjs/common';

export interface Task {
  id: number;
  title: string;
  description: string;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  create(title: string, description: string): Task {
    const task: Task = {
      id: this.tasks.length + 1,
      title,
      description,
    };
    this.tasks.push(task);
    return task;
  }
}
