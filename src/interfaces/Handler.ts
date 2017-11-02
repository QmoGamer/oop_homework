import { Candidate } from '../classes/Candidate';

interface Handle
{
    Perform(candidate: Candidate, target: number[]): number[];
}