/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { Component } from '../Component';
import { IPanel, IViewBased } from '../../types/view';
import { Create } from '../Create';
export declare class Panel extends Component implements IPanel {
    protected __whoLocked: string | false;
    protected __isFullSize: boolean;
    ownerDocument: Document;
    ownerWindow: Window;
    container: HTMLDivElement;
    create: Create;
    constructor(jodit?: IViewBased);
    destruct(): any;
    isLocked: () => boolean;
    isLockedNotBy: (name: string) => boolean;
    lock(name?: string): boolean;
    unlock(): boolean;
    isFullSize: () => boolean;
    toggleFullSize(isFullSize?: boolean): void;
}
