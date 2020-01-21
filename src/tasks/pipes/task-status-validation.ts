import {ArgumentMetadata, BadRequestException, PipeTransform} from '@nestjs/common';
import {TaskStatusEnum} from '../task.status.enum';


export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatus = [
        TaskStatusEnum.OPEN,
        TaskStatusEnum.DONE,
        TaskStatusEnum.IN_PROGRESS
    ];

    transform(value: any, metadata: ArgumentMetadata): any {
        value = value.toUpperCase();

        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} is an invalid status`);
        }

        return value;
    }

    private isStatusValid(status: any): boolean {
        return this.allowedStatus.includes(status);
    }
}
