import { MyBackupService } from './src/services/MyBackupService';

let myBackupService = new MyBackupService;
myBackupService.ProcessJsonConfigs();
myBackupService.DoBackup();

console.log('ok');

// let configManager = new ConfigManager();
// configManager.ProcessConfigs();

// for(let i = 0; i < configManager.Count; i++) 
// {
//     let config = configManager.configs[i];
//     let connectionString = config.ConnectionString;
//     let destination = config.Destination;
//     let ext = config.Ext;
//     let handler = config.Hanlder;
//     let location = config.Location;
//     let remove = config.Remove;
//     let subDirectory = config.SubDirectory;
//     let unit = config.Unit;
//     console.log(config);
// }

// let scheduleManager = new ScheduleManager();
// scheduleManager.ProcessSchedules();

// for(let i = 0; i < scheduleManager.Count; i++) 
// {
//     let schedule = scheduleManager.schedules[i];
//     let ext = schedule.Ext;
//     let time = schedule.Time;
//     let interval = schedule.Interval;
//     console.log(schedule);
// }