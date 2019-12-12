import { ILanguageOptions } from '../../../types';
export declare const sprintf: (str: string, args?: (string | number)[] | undefined) => string;
export declare const i18n: (key: string, params?: (string | number)[] | undefined, options?: ILanguageOptions | undefined, safe?: boolean) => string;
