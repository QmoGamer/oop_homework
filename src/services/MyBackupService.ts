import { JsonManager } from '../managers/JsonManager';
import { ConfigManager } from '../managers/ConfigManager';
import { ScheduleManager } from '../managers/ScheduleManager';
import { Candidate } from '../classes/Candidate';
import { Handler } from '../interfaces/Handler';
import { HandlerFactory } from '../factories/HandlerFactory';

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
        HandlerFactory.Create('file');
    }
    
    private FindHandlers(candidate: Candidate): Handler[]
    {
        let handlers: Handler[] = [];
        HandlerFactory.Create('file');
        return handlers;
    }
}