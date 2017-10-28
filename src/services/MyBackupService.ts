import { JsonManager } from '../managers/JsonManager';
import { ConfigManager } from '../managers/ConfigManager';
import { ScheduleManager } from '../managers/ScheduleManager';

/**
 * Class MyBackupService 
 * @author Qmo
 */
export class MyBackupService
{
    /** @var Array managers 陣列  */
    private managers: JsonManager[] = [];

    /**
     * 建構子
     * @author Qmo
     */
    constructor()
    {
        this.managers.push(new ConfigManager());
        this.managers.push(new ScheduleManager());
    }

    /**
     * 解析 json
     * @author Qmo
     */
    public ProcessJsonConfigs(): void
    {
        for( let manager of this.managers ) {
            manager.ProcessJsonConfig();
        };
    }

    /**
     * 備份
     * @author Qmo
     */
    public DoBackup(): void
    {        
        console.log(this.managers);
    }
}