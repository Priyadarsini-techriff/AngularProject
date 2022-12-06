
import { TimeEntries } from './timeentries';
export class TimeSheets {
    id!: number;
    ApproverName!: string;
    ApproverEmail!:string;
    DateCreated!: Date;
    assignedOn!: Date;
    lasttimeEntryOn!: Date;
    TimeEntries!: TimeEntries[];
    TimeSheetKey!:string;
    UserEmail!: string;
}