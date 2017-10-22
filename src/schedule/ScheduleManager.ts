import * as fs from 'fs';
import { Schedule } from './Schedule';

export class ScheduleManager {
    public schedules: Array<Schedule>;
    
    get Count() {
        if (!this.schedules)
            return 0;

        return this.schedules.length;
    }

    ProcessSchedules() {
        let scheduleJson = JSON.parse(fs.readFileSync('./public/schedule.json', 'utf8'));
        this.schedules = scheduleJson.schedules;
    }
}