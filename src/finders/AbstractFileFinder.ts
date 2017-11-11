import { Config } from '../classes/Config';
import { Candidate } from '../classes/Candidate';
import { FileFinder } from '../interfaces/FileFinder';

export abstract class AbstractFileFinder implements FileFinder
{
    protected config: Config;
    protected files: string[];
    protected index: number = 0;

    constructor(config: Config)
    {
        if (config != null)
        {
            this.config = config;
        }
    }

    protected abstract CreateCandidate(fileName: string): Candidate

    [Symbol.iterator](): IterableIterator<T> {
        return this;
    }

    next(): IteratorResult<T> {
        if (this.index < this.students.length) {
            return {
            done: false,
            value: this.students[this.index++]
            };
        }

        return {
            done: true,
            value: undefined
        };
    }    
}