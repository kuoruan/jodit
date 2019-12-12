/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IDialogOptions } from '../../types/dialog';
import { IViewBased } from '../../types/view';
import { View } from '../view/view';
declare module '../../Config' {
    interface Config {
        dialog: IDialogOptions;
    }
}
declare type Content = string | HTMLElement | Array<string | HTMLElement>;
export declare class Dialog extends View {
    private resizer;
    toolbar: ToolbarCollection;
    private offsetX;
    private offsetY;
    private destination;
    private destroyAfterClose;
    private moved;
    private iSetMaximization;
    private resizable;
    private draggable;
    private startX;
    private startY;
    private startPoint;
    private lockSelect;
    private unlockSelect;
    private setElements;
    private onMouseUp;
    private onHeaderMouseDown;
    private onMouseMove;
    private onKeyDown;
    private onResize;
    private onResizerMouseDown;
    options: IDialogOptions;
    dialog: HTMLDivElement;
    dialogbox_header: HTMLHeadingElement;
    dialogbox_content: HTMLDivElement;
    dialogbox_footer: HTMLDivElement;
    dialogbox_toolbar: HTMLDivElement;
    document: Document;
    window: Window;
    setSize(w?: number | string, h?: number | string): void;
    setPosition(x?: number, y?: number): void;
    setTitle(content: Content): void;
    setContent(content: Content): void;
    setFooter(content: Content): void;
    getZIndex(): number;
    getMaxZIndexDialog(): Dialog;
    setMaxZIndex(): void;
    maximization(condition?: boolean): boolean;
    open(content?: Content, title?: Content, destroyAfter?: boolean, modal?: boolean): void;
    isOpened(): boolean;
    close: (e?: MouseEvent | undefined) => void;
    constructor(jodit?: IViewBased, options?: any);
    destruct(): void;
}
import { ToolbarCollection } from '..';
export {};
