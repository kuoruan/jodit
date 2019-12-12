/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { Plugin } from '../modules/Plugin';
import { IJodit } from '../types';
declare module '../Config' {
    interface Config {
        useTableProcessor: boolean;
        useExtraClassesOptions: boolean;
    }
}
export declare class TableProcessor extends Plugin {
    static isCell(tag: Node | null): boolean;
    private __key;
    private __selectMode;
    private __resizerDelta;
    private __resizerHandler;
    showResizer(): void;
    hideResizer(): void;
    private hideTimeout;
    private __drag;
    private __wholeTable;
    private __workCell;
    private __workTable;
    private __minX;
    private __maxX;
    private __deSelectAll;
    private __setWorkCell;
    private __addResizer;
    private __calcResizerPosition;
    private onExecCommand;
    observe(table: HTMLTableElement): void;
    afterInit(editor: IJodit): void;
    beforeDestruct(jodit: IJodit): void;
}
