import { AbstractHandler } from './AbstractHandler';
import { Candidate } from '../classes/Candidate';

export class ZipHandler extends AbstractHandler
{
    Perform(candidate: Candidate, target: number[]): number[]
    {
        return [];
    }
}