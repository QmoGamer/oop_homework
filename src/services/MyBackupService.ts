import { JsonManager } from '../managers/JsonManager';
import { ConfigManager } from '../managers/ConfigManager';
import { ScheduleManager } from '../managers/ScheduleManager';
import { Candidate } from '../classes/Candidate';
import { Handler } from '../interfaces/Handler';
import { FileFinder } from '../interfaces/FileFinder';
import { HandlerFactory } from '../factories/HandlerFactory';
import * as fs from 'fs';
import { Config } from '../classes/Config';
import { FileFinderFactory } from '../factories/FileFinderFactory';

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
        for(let manager of this.managers) {
            manager.ProcessJsonConfig();
        };
    }

    /**
     * 備份
     * @author Qmo
     */
    public DoBackup(): void
    {    
        // let fileFinder: FileFinder = this.FindFiles();
        let newConfig = new Config(     
            "db",
            "directory",               
            "./",
            ".ts",
            ["zip","encode"],
            "./src",
            false,
            true,
            "file"
        );
        let fileFinder = FileFinderFactory.Create('file', newConfig)
        console.log(fileFinder);

        // for (let candidate of fileFinder) {
        //     this.BroadcastToHanders(candidate);
        // };
    }

    private BroadcastToHanders(candidate: Candidate): void
    {
        let handlers = this.FindHandlers(candidate);

        for (let handler of handlers) {
            //target = handler.Perform(candidate, target);
        };
    }

    private FindFiles(): Candidate[] 
    {        
        let newConfig = new Config(     
                "db",
                "directory",               
                "./",
                "ts",
                ["zip","encode"],
                "./",
                false,
                false,
                "file"
        );

        let newCandidate = new Candidate(
            newConfig,
            '',
            '',
            '',
            0
        )

        return [newCandidate];
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
    }
}