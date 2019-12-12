/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { HTMLTagNames, IDictionary, IJodit, markerInfo } from '../types';
declare type WindowSelection = Selection | null;
export declare class Select {
    readonly jodit: IJodit;
    constructor(jodit: IJodit);
    private errorNode;
    get area(): HTMLElement;
    get win(): Window;
    get doc(): Document;
    get sel(): WindowSelection;
    get range(): Range;
    createRange(): Range;
    remove(): void;
    insertCursorAtPoint(x: number, y: number): boolean;
    isMarker: (elm: Node) => boolean;
    removeMarkers(): void;
    marker(atStart?: boolean, range?: Range): HTMLSpanElement;
    restore(selectionInfo?: markerInfo[] | null): void;
    save(): markerInfo[];
    focus: () => boolean;
    isCollapsed(): boolean;
    isFocused(): boolean;
    current(checkChild?: boolean): false | Node;
    insertNode(node: Node, insertCursorAfter?: boolean, fireChange?: boolean): void;
    insertHTML(html: number | string | Node): void;
    insertImage(url: string | HTMLImageElement, styles: IDictionary<string> | null, defaultWidth: number | string | null): void;
    eachSelection: (callback: (current: Node) => void) => void;
    setCursorAfter(node: Node | HTMLElement | HTMLTableElement | HTMLTableCellElement): Text | false;
    cursorInTheEdge(start: boolean, parentBlock: HTMLElement): boolean | null;
    setCursorBefore(node: Node | HTMLElement | HTMLTableElement | HTMLTableCellElement): Text | false;
    setCursorIn(node: Node, inStart?: boolean): Node;
    selectRange(range: Range): void;
    select(node: Node | HTMLElement | HTMLTableElement | HTMLTableCellElement, inward?: boolean): void;
    getHTML(): string;
    applyCSS(cssRules: IDictionary<string | number | undefined>, nodeName?: HTMLTagNames, options?: ((jodit: IJodit, elm: HTMLElement) => boolean) | IDictionary<string | string[]> | IDictionary<(editor: IJodit, elm: HTMLElement) => boolean>): void;
}
export {};
