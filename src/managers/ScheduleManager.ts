import { Schedule } from '../classes/Schedule';
import { JsonManager } from './JsonManager';

/**
 * Class ScheduleManager 
 * @author Qmo
 */
export class ScheduleManager extends JsonManager
{
    /** @static String schedule.json 存放路徑  */
    private static PATH: string = './public/schedule.json';

    /** @var Array schedules 陣列  */
    private schedules: Schedule[] = [];

    /**
     * 讀取 schedule.json 並存入 schedules 陣列
<<<<<<< HEAD
     * @return void
=======
     * @return Void
>>>>>>> develop
     * @author Qmo
     */
    public ProcessJsonConfig(): void
    {
        let scheduleObject: any = this.GetJsonObject(ScheduleManager.PATH);
<<<<<<< HEAD
        this.schedules = scheduleObject.schedules;
=======
        
        for(let schedule of scheduleObject.schedules){
            let newSchedule = new Schedule(
                schedule.ext,
                schedule.time,
                schedule.interval
            );            
            this.schedules.push(newSchedule);            
        }
>>>>>>> develop
    }
    
    /**
     * 取得 schedules 數量
     * @return Number
     * @author Qmo
     */
<<<<<<< HEAD
    public Count() {
=======
    public Count(): number 
    {
        if(!this.schedules) {
            return 0;
        };

>>>>>>> develop
        return this.schedules.length;
    }
}