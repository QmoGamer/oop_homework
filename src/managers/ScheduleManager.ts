import { Schedule } from '../classes/Schedule';
import { JsonManager } from './JsonManager';

export class ScheduleManager extends JsonManager
{
    private static PATH: string = './public/schedule.json';
    private schedules: Schedule[] = [];

    public ProcessJsonConfig(): void
    {
        let scheduleObject: object = this.GetJsonObject(ScheduleManager.PATH);
        console.log(scheduleObject);
        // this.schedules = scheduleObject.schedules;
        // console.log(this.schedules);
    }
    
    public Count() {
        return this.schedules.length;
    }
}