import * as fs from 'fs';
import { Config } from '../classes/Config';
import { Candidate } from '../classes/Candidate';
import { AbstractFileFinder } from './AbstractFileFinder';

export class LocalFileFinder extends AbstractFileFinder
{
    constructor(config: Config)
    {
        super(config);

        if (config.SubDirectory)
            this.files = this.GetSubDirectoryFiles(config);
        else
            this.files = this.GetFiles(config);
    }

    private GetSubDirectoryFiles(config: Config): string[]
    {
        return;
    }

    private GetFiles(config: Config): string[]
    {
        let files: string[] = [];

        JSON.stringify(fs.readFileSync('./.ts', 'utf8'));
        return files;
    }

    protected CreateCandidate(fileName: string): Candidate
    {
        return;
    }
}