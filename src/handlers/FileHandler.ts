import { AbstractHandler } from './AbstractHandler';
import { Candidate } from '../classes/Candidate';

export class FileHandler extends AbstractHandler
{
    Perform(candidate: Candidate, target: number[]): number[]
    {
        super.Perform(candidate, target);

        return [];
    }

    // to do
}