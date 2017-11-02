import { Candidate } from '../classes/Candidate';

export interface Handler
{
    Perform(candidate: Candidate, target: number[]): number[];
}