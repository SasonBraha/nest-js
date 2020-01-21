import { Injectable } from '@nestjs/common';
import {Task, TaskStatusEnum} from './task.model';
import * as uuid from 'uuid';
import {CreateTaskDto} from './dto/create-task.dto';
import {GetTasksFilterDto} from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskWithFilters(filterDto: GetTasksFilterDto): Task[] {
        const { status, search } = filterDto;
        let tasks = this.getAllTasks();

        if (status) {
            tasks = this.tasks.filter(task => task.status === status);
        }

        if (search) {
            tasks = this.tasks.filter(task => task.title.includes(search) || task.description.includes(search));
        }

        return  tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;
        const task = {
            id: uuid(),
            status: TaskStatusEnum.OPEN,
            title,
            description
        };

        this.tasks.push(task);
        return task;
    }

    deleteTask(id: string): void {
        /*
        * We execute getTaskById only to trigger validation.
        * */
        const found = this.getTaskById(id);
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTaskStatus(id: string, status: TaskStatusEnum): Task {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }
}
