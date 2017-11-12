import * as fs from 'fs';
import { Config } from '../classes/Config';
import { Candidate } from '../classes/Candidate';
import { AbstractFileFinder } from './AbstractFileFinder';

export class LocalFileFinder<T> extends AbstractFileFinder<T>
{
    constructor(config: Config)
    {
        super(config);

        this.files = this.GetSubDirectoryFiles(config.Location, config.Ext, config.SubDirectory);        
    }

    private GetSubDirectoryFiles(location: string, ext: string, subDirectory: boolean): string[]
    {
        let files: string[] = [];
        let fsFiles: string[] = fs.readdirSync(location);

        for (let fsFile of fsFiles) {
            
            if (subDirectory && fs.statSync(location+'/'+fsFile).isDirectory()) {
                files = files.concat(this.GetSubDirectoryFiles(location+'/'+fsFile, ext, subDirectory));
            }

            if (fsFile.match(ext)) {
                files.push(fsFile);
            }
        }

        return files;
    }

    // protected CreateCandidate(fileName: string): Candidate
    // {
    //     let c: Candidate;

    //     return c;
    // }
}