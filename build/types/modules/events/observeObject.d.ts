import { CallbackFunction, IDictionary } from '../../types';
export declare class ObserveObject {
    readonly data: IDictionary;
    protected constructor(data: IDictionary);
    private __onEvents;
    on(event: string | string[], callback: CallbackFunction): ObserveObject;
    private __lockEvent;
    private fire;
    static create<T, K extends T & ObserveObject = T & ObserveObject>(data: T): K;
}
