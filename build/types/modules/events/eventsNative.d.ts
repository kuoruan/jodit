/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * License GNU General License version 2 or later;
 * Copyright 2013-2019 Valeriy Chupurnov https://xdsoft.net
 */
import { CallbackFunction } from '../../types';
import { IEventsNative } from '../../types/events';
export declare class EventsNative implements IEventsNative {
    readonly __key: string;
    private doc;
    private __stopped;
    private eachEvent;
    private getStore;
    private clearStore;
    private prepareEvent;
    private triggerNativeEvent;
    private removeStop;
    private isStopped;
    current: string[];
    on(subjectOrEvents: string, eventsOrCallback: CallbackFunction, handlerOrSelector?: void, selector?: string, onTop?: boolean): EventsNative;
    on(subjectOrEvents: object, eventsOrCallback: string, handlerOrSelector: CallbackFunction, selector?: string, onTop?: boolean): EventsNative;
    off(subjectOrEvents: string, eventsOrCallback?: () => void): EventsNative;
    off(subjectOrEvents: object, eventsOrCallback?: string, handler?: () => void): EventsNative;
    stopPropagation(subjectOrEvents: string): void;
    stopPropagation(subjectOrEvents: object, eventsList: string): void;
    fire(subjectOrEvents: string, eventsList?: any, ...args: any[]): any;
    fire(subjectOrEvents: object, eventsList: string | Event, ...args: any[]): any;
    private isDestructed;
    constructor(doc?: Document);
    destruct(): void;
}
