import { Dialog } from './dialog';
export declare const Alert: (msg: string | HTMLElement, title?: string | (() => false | void) | undefined, callback?: string | ((dialog: Dialog) => false | void) | undefined, className?: string) => Dialog;
