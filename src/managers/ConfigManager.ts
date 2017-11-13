import { Config } from '../classes/Config';
import { JsonManager } from './JsonManager';

/**
 * Class ConfigManager 
 * @author Qmo
 */
export class ConfigManager extends JsonManager {

    /** @static String config.json 存放路徑  */
    private static PATH: string = './public/config.json';

    /** @var Array configs 陣列  */
    private configs: Config[] = [];

    /**
     * 讀取 config.json 並存入 configs 陣列
     * @return Void
     * @author Qmo
     */
    public ProcessJsonConfig(): void
    {
        let configObject: any = this.GetJsonObject(ConfigManager.PATH);

        for(let config of configObject.configs){
            let newConfig = new Config(
                config.connectionString,
                config.destination,
                config.dir,
                config.ext,
                config.handlers,
                config.location,
                config.remove,
                config.subDirectory,
                config.unit
            );            
            this.configs.push(newConfig);            
        }
    }
    
    /**
     * 取得 configs 數量
     * @return Number
     * @author Qmo
     */
    public Count(): number 
    {
        if(!this.configs) {
            return 0;
        };

        return this.configs.length;
    }
}