import { TaskStatus } from '../tasks.model';

export class GetTaskfilterDto {
  status?: TaskStatus;
  search?: string;
}
