import * as fs from 'fs';
import { Dictionary } from '../interfaces/Dictionary';
import { Handler } from '../interfaces/Handler';

export class HandlerFactory
{
    private static PATH: string = './public/handler_mapping.json';

    private static handlerDictionary: Dictionary;

    constructor() {
        
        
    }

    public static Create(key: string)
    {
        console.log('create');
        let handlers: Dictionary = JSON.parse(fs.readFileSync(HandlerFactory.PATH, 'utf8'));
        HandlerFactory.handlerDictionary = handlers;
        console.log(HandlerFactory.handlerDictionary.file);
        return;
    }
}