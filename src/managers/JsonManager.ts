import * as fs from 'fs';

/**
 * @abstract Class JsonManager 
 * @author Qmo
 */
export abstract class JsonManager
{
    /**
     * 根據參數 path 讀取 json file
     * @param path 
     * @return Object
     * @author Qmo
     */
    protected GetJsonObject(path: string): object
    {
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    }

    /** @abstract ProcessJsonConfig 解析 json */
    public abstract ProcessJsonConfig(): void; 

    /** @abstract Count 取得數量 */
    public abstract Count(): number;
}