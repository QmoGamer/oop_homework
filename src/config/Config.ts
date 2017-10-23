export class Config {
    private readonly connectionString: string;
    private readonly destination: string;
    private readonly dir: string;
    private readonly ext: string;
    private readonly handler: string;
    private readonly location: string;
    private readonly remove: string;
    private readonly subDirectory: string;
    private readonly unit: string;

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
        connectionString: string, 
        destination: string, 
        dir: string, 
        ext: string, 
        handler: string, 
        location: string, 
        remove: string, 
        subDirectory: string,
        unit: string
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