/** 
 * Class Schedule 
 * @author Qmo
 */
export class Schedule {
    /**
     * @property String Ext
     * @property String Time
     * @property String Interval
     */
    get Ext(): string { return this.ext; }
    get Time(): string { return this.time; }
    get Interval(): string { return this.interval; }    

    /**
     * 建構子
     * @param String ext 設定此排程所處理的檔案格式 
     * @param String time 設定此排程所處理的時間 
     * @param String interval 設定此排程執行的間隔 
     * @author Qmo
     */
    constructor(
        private readonly ext: string,
        private readonly time: string,
        private readonly interval: string
    ) { }
}