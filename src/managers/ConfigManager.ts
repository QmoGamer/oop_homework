import { Config } from '../classes/Config';
import { JsonManager } from './JsonManager';

export class ConfigManager extends JsonManager {
    // public configs: Array<Config>;
    
    // get Count() {
    //     if (!this.configs)
    //         return 0;

    //     return this.configs.length;
    // }

    // ProcessConfigs() {
    //     let configJson = JSON.parse(fs.readFileSync('./public/config.json', 'utf8'));
    //     this.configs = configJson.configs;
    // }

    private static PATH: string = './public/config.json';
    private configs: Config[] = [];

    public ProcessJsonConfig(): void
    {
        let configObject: object = this.GetJsonObject(ConfigManager.PATH);
        console.log(configObject);
        // this.configs = configObject.configs;
        // console.log(this.configs);
    }
    
    public Count() {
        return this.configs.length;
    }
}