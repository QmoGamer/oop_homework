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
     * @return void
     * @author Qmo
     */
    public ProcessJsonConfig(): void
    {
        let scheduleObject: any = this.GetJsonObject(ScheduleManager.PATH);
        this.schedules = scheduleObject.schedules;
    }
    
    /**
     * 取得 schedules 數量
     * @return Number
     * @author Qmo
     */
    public Count() {
        return this.schedules.length;
    }
}