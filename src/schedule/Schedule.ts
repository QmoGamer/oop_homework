export class Schedule {
    private readonly ext: string;
    private readonly time: string;
    private readonly interval: string;

    get Ext(): string { return this.ext; }
    get Time(): string { return this.time; }
    get Interval(): string { return this.interval; }

    constructor(
        ext: string,
        time: string,
        interval: string
    ) {
        this.ext = ext;
        this.time = time;
        this.interval = interval;
    }
}