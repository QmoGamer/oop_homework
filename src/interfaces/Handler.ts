import { Candidate } from '../classes/Candidate';

/**
 * interface Handler 
 * @author Qmo
 */
export interface Handler
{
    /**
     * @param Candidate
     * @param Number[]
     * @return Number[]
     * @author Qmo
     */
    Perform(candidate: Candidate, target: number[]): number[];
}