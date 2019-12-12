import { IJodit } from '../types';
declare module '../Config' {
    interface Config {
        limitWords: false | number;
        limitChars: false | number;
        limitHTML: false;
    }
}
export declare function limit(jodit: IJodit): void;
