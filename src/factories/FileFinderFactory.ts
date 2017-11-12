import { Config } from '../classes/Config';
import { LocalFileFinder } from '../finders/LocalFileFinder';

export class FileFinderFactory
{
    public static Create(finder: string, config: Config)
    {
        if (finder === 'file') 
        {
            return new LocalFileFinder(config);
        }

        return null;
    }
}