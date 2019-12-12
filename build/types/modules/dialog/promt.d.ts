import { Dialog } from './dialog';
export declare const Promt: (msg: string, title: string | (() => false | void) | undefined, callback: (value: string) => false | void, placeholder?: string | undefined, defaultValue?: string | undefined) => Dialog;
