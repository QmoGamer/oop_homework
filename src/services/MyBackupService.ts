import { JsonManager } from '../managers/JsonManager';

export class MyBackupService
{
    private managers: Array<JsonManager>;

    public ProcessJsonConfigs(): void
    {
        console.log('process');
    }

    public DoBackup(): void
    {
        console.log('backup');
    }
}