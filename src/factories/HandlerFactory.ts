import * as fs from 'fs';
import { Dictionary } from '../interfaces/Dictionary';
import { Handler } from '../interfaces/Handler';
import { FileHandler } from '../handlers/FileHandler';
import { EncodeHandler } from '../handlers/EncodeHandler';
import { ZipHandler } from '../handlers/ZipHandler';
import { DirectoryHandler } from '../handlers/DirectoryHandler';

/** 
 * Class HandlerFactory 
 * @author Qmo
 */
export class HandlerFactory
{
    /** @static String handler_mapping.json 存放路徑  */
    private static PATH: string = './public/handler_mapping.json';

    /** @static Dictionary */
    private static handlerDictionary: Dictionary;

    /**
     * 建構子 將 handler_mapping 轉為 Dictionary
     * @static
     * @author Qmo
     */
    public static initialize() {
        HandlerFactory.handlerDictionary = JSON.parse(fs.readFileSync(HandlerFactory.PATH, 'utf8'));
    }

    /**
     * 根據所傳參數建立相對物件
     * @param key 
     * @author Qmo
     */
    public static Create(key: string): any
    {
        switch (HandlerFactory.handlerDictionary[key]) {
            case 'FileHandler':
                return new FileHandler();
            case 'EncodeHandler':
                return new EncodeHandler();
            case 'ZipHandler':
                return new ZipHandler();
            case 'DirectoryHandler':
                return new DirectoryHandler();
        }
    }
}