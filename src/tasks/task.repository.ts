import {EntityRepository, Repository} from 'typeorm';
import {Task} from './task';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

}
