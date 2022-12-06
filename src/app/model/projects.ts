import { Manager } from './manager';
import { Base } from './base';
import { Date } from './date';
export class ExploreProject {
    id!: number;
    name!: string;
    description!: string;
    projectManager!: Manager;
    projectDeadline!: Date;
    teams!: Base[];
    technologies!: Base[];
    timeSheets!: Date[];
}