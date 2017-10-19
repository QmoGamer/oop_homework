var Config = /** @class */ (function () {
    function Config(connectionString, destination, dir, ext, handler, location, remove, subDirectory, unit) {
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
    Object.defineProperty(Config.prototype, "ConnectionString", {
        get: function () { return this.connectionString; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "Destination", {
        get: function () { return this.destination; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "Dir", {
        get: function () { return this.dir; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "Ext", {
        get: function () { return this.ext; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "Hanlder", {
        get: function () { return this.handler; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "Location", {
        get: function () { return this.location; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "Remove", {
        get: function () { return this.remove; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "SubDirectory", {
        get: function () { return this.subDirectory; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "Unit", {
        get: function () { return this.unit; },
        enumerable: true,
        configurable: true
    });
    Config.prototype.Config = function () {
        return false;
    };
    return Config;
}());
var x = new Config('1', '2', '3', '4', '5', '6', '7', '8', '9');
