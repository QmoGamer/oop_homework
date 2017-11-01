export class Candidate
{
    get FileDateTime(): string { return this.fileDateTime; }
    get Name(): string { return this.name; }
    get ProcessName(): string { return this.processName; }
    get Size(): number { return this.size; }

    constructor(
        private config: string, 
        private fileDateTime: string,
        private name: string,
        private processName: string,
        private size: number
    ) { }
}