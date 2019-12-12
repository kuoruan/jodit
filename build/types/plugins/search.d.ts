/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { Plugin } from '../modules/Plugin';
import { ISelectionRange } from '../types/types';
import { IJodit } from '../types';
declare module '../Config' {
    interface Config {
        useSearch: boolean;
    }
}
export declare class search extends Plugin {
    static getSomePartOfStringIndex(needle: string, haystack: string, start?: boolean): number | false;
    static findSomePartOfString(needle: string, haystack: string, start?: boolean, getIndex?: boolean): boolean | string | number;
    private template;
    private isOpened;
    private selInfo;
    private current;
    private eachMap;
    private updateCounters;
    private boundAlreadyWas;
    private tryScrollToElement;
    searchBox: HTMLDivElement;
    queryInput: HTMLInputElement;
    replaceInput: HTMLInputElement;
    closeButton: HTMLButtonElement;
    nextButton: HTMLButtonElement;
    prevButton: HTMLButtonElement;
    replaceButton: HTMLButtonElement;
    counterBox: HTMLSpanElement;
    calcCounts: (query: string, current?: false | ISelectionRange) => [number, number];
    findAndReplace: (start: Node | null, query: string) => boolean;
    findAndSelect: (start: Node | null, query: string, next: boolean) => boolean;
    find: (start: Node | null, query: string, next: boolean, deep: number, range: Range) => false | ISelectionRange;
    open: (searchAndReplace?: boolean) => void;
    close: () => void;
    afterInit(editor: IJodit): void;
    beforeDestruct(jodit: IJodit): void;
}
