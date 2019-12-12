/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { Plugin } from '../modules/Plugin';
export declare class DragAndDrop extends Plugin {
    private isFragmentFromEditor;
    private isCopyMode;
    private startDragPoint;
    private draggable;
    private bufferRange;
    private onDragEnd;
    private onDrag;
    private onDrop;
    private onDragStart;
    private getDataTransfer;
    private getText;
    afterInit(): void;
    beforeDestruct(): void;
}
