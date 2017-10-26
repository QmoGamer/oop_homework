export class Schedule {
    get Ext(): string { return this.ext; }
    get Time(): string { return this.time; }
    get Interval(): string { return this.interval; }

    constructor(
        private ext: string,
        private time: string,
        private interval: string
    ) {
        this.ext = ext;
        this.time = time;
        this.interval = interval;
    }
}