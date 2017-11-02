import { Handler } from '../interfaces/Handler';
import { Candidate } from '../classes/Candidate';

export abstract class AbstractHandler implements Handler
{
    Perform(candidate: Candidate, target: number[]): number[]
    {
        return [];
    }
}