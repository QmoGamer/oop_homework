import * as fs from 'fs';
import { Config } from './Config';

export class ConfigManager {
    public configs: Array<Config>;
    
    get Count() {
        if (!this.configs)
            return 0;

        return this.configs.length;
    }

    ProcessConfigs() {
        let configJson = JSON.parse(fs.readFileSync('./public/config.json', 'utf8'));
        this.configs = configJson.configs;
    }
}