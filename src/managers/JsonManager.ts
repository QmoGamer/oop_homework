import * as fs from 'fs';
export abstract class JsonManager
{
    protected GetJsonObject(path: string): object
    {
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    }

    public abstract ProcessJsonConfig(): void; 

    public abstract Count(): number;
}