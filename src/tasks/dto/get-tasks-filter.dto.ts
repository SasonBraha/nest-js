
import {IsIn, IsNotEmpty, IsOptional} from 'class-validator';
import {TaskStatusEnum} from '../task.status.enum';

export class GetTasksFilterDto {
    @IsOptional()
    @IsIn([TaskStatusEnum.IN_PROGRESS, TaskStatusEnum.OPEN, TaskStatusEnum.DONE])
    status: TaskStatusEnum;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}
