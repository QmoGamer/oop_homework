/** class Schedule */
export class Schedule {

    /** 建構子 */
    constructor(

        /** 設定此排程所處理的檔案格式 */
        private readonly ext: string,

        /** 設定此排程所處理的時間 */
        private readonly time: string,

        /** 設定此排程執行的間隔 */
        private readonly interval: string
    ) {
        this.ext = ext;
        this.time = time;
        this.interval = interval;
    }
}