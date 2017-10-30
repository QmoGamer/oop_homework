import { MyBackupService } from './src/services/MyBackupService';

/** @var MyBackupService myBackupService */
let myBackupService = new MyBackupService;

/** 解析 json */
myBackupService.ProcessJsonConfigs();

/** DoBackup */
myBackupService.DoBackup();