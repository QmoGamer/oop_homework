export class Config {
    get ConnectionString(): string { return this.connectionString; }
    get Destination(): string { return this.destination; }
    get Dir(): string { return this.dir; }
    get Ext(): string { return this.ext; }
    get Hanlder(): string { return this.handler; }
    get Location(): string { return this.location; }
    get Remove(): string { return this.remove; }
    get SubDirectory(): string { return this.subDirectory; }
    get Unit(): string { return this.unit; }

    constructor(
        private connectionString: string, 
        private destination: string, 
        private dir: string, 
        private ext: string, 
        private handler: string, 
        private location: string, 
        private remove: string, 
        private subDirectory: string,
        private unit: string
    ) {
        this.connectionString = connectionString;
        this.destination = destination;
        this.dir = dir;
        this.ext = ext;
        this.handler = handler;
        this.location = location;
        this.remove = remove;
        this.subDirectory = subDirectory;
        this.unit = unit;
    }
}