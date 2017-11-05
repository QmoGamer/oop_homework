import { Config } from './Config';

/** 
 * Class Candidate 
 * @author Qmo
 */
export class Candidate
{
    /**
     * @property String FileDateTime
     * @property String Name
     * @property String ProcessName
     * @property Number Size
     */
    get FileDateTime(): string { return this.fileDateTime; }
    get Name(): string { return this.name; }
    get ProcessName(): string { return this.processName; }
    get Size(): number { return this.size; }

    /**
     * 建構子
     * @param Config config 根據的 Config 物件
     * @param String fileDateTime 檔案的日期與時間
     * @param String name 檔案名稱
     * @param String processName 處理檔案的 process
     * @param Number size 檔案大小
     */
    constructor(
        private config: Config, 
        private fileDateTime: string,
        private name: string,
        private processName: string,
        private size: number
    ) { }
}