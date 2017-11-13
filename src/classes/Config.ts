/**
 * Class Config
 * @author Qmo
 */
export class Config 
{
    /**
     * @property String ConnectionString
     * @property String Destination
     * @property String Dir
     * @property String Ext
     * @property String[] Hanlders
     * @property String Location
     * @property Boolean Remove
     * @property Boolean SubDirectory
     * @property String Unit
     */
    get ConnectionString(): string { return this.connectionString; }
    get Destination(): string { return this.destination; }
    get Dir(): string { return this.dir; }
    get Ext(): string { return this.ext; }
    get Hanlders(): string[] { return this.handlers; }
    get Location(): string { return this.location; }
    get Remove(): boolean { return this.remove; }
    get SubDirectory(): boolean { return this.subDirectory; }
    get Unit(): string { return this.unit; }

    /**
     * 建構子
     * @param String connectionString 設定資料庫連接字串
     * @param String destination 處理後要儲存到什麼地方 (directory: 目錄, db: 資料庫)
     * @param String dir 處理後的目錄
     * @param String ext 設定檔案格式
     * @param String[] handlers 處理方式 (zip: 壓縮, encode: 加密)
     * @param String location 設定要備份檔案的目錄 
     * @param Boolean remove 處理完是否刪除檔案 (true: 刪除, false: 不刪除)
     * @param Boolean subDirectory 是否處理子目錄 (true: 處理子目錄, false: 不處理子目錄)
     * @param String unit 設定備份單位 (file: 以單一檔案為處理單位, directory: 以整個目錄為處理單位)
     * @author Qmo
     */
    constructor(
        private connectionString: string,
        private destination: string,
        private dir: string,
        private ext: string,
        private handlers: string[],
        private location: string,
        private remove: boolean,
        private subDirectory: boolean,
        private unit: string
    ) { }
}