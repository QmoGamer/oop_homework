import { JsonManager } from '../managers/JsonManager';
import { ConfigManager } from '../managers/ConfigManager';
import { ScheduleManager } from '../managers/ScheduleManager';
<<<<<<< HEAD
=======
import { Candidate } from '../classes/Candidate';
import { Handler } from '../interfaces/Handler';
import { HandlerFactory } from '../factories/HandlerFactory';
>>>>>>> develop

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
<<<<<<< HEAD
        for( let manager of this.managers ) {
=======
        for(let manager of this.managers) {
>>>>>>> develop
            manager.ProcessJsonConfig();
        };
    }

    /**
     * 備份
     * @author Qmo
     */
    public DoBackup(): void
<<<<<<< HEAD
    {        
        console.log(this.managers);
=======
    {    
        let candidates = this.FindFiles();

        for(let candidate of candidates) {
            this.BroadcastToHanders(candidate);
        };
    }

    private BroadcastToHanders(candidate: Candidate): void
    {
        let handlers = this.FindHandlers(candidate);

        for(let handler of handlers) {
            //target = handler.Perform(candidate, target);
        };
    }

    private FindFiles(): Candidate[] 
    {        
        return [];
    }
    
    private FindHandlers(candidate: Candidate): Handler[]
    {
        HandlerFactory.initialize();

        let handlers: Handler[] = [];
        handlers.push(HandlerFactory.Create('file'));
        handlers.push(HandlerFactory.Create('encode'));
        handlers.push(HandlerFactory.Create('zip'));
        handlers.push(HandlerFactory.Create('directory'));

        return handlers;
>>>>>>> develop
    }
}