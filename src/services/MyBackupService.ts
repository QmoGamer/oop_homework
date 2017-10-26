import { JsonManager } from '../managers/JsonManager';
import { ConfigManager } from '../managers/ConfigManager';
import { ScheduleManager } from '../managers/ScheduleManager';

export class MyBackupService
{
    private managers: JsonManager[] = [];

    constructor()
    {
        this.managers.push(new ConfigManager());
        this.managers.push(new ScheduleManager());
    }

    public ProcessJsonConfigs(): void
    {
        this.managers.forEach(element => {
            element.ProcessJsonConfig();
        });
    }

    public DoBackup(): void
    {        
        console.log(this.managers);
    }
}