import {TaskStatusEnum} from '../task.model';
import {IsIn, IsNotEmpty, IsOptional} from 'class-validator';

export class GetTasksFilterDto {
    @IsOptional()
    @IsIn([TaskStatusEnum.IN_PROGRESS, TaskStatusEnum.OPEN, TaskStatusEnum.DONE])
    status: TaskStatusEnum;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}
