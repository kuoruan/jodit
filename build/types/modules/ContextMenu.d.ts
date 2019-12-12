/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IViewBased } from '../types/view';
import { Component } from './Component';
export interface Action {
    icon?: string;
    title?: string;
    exec?: (this: ContextMenu, e: MouseEvent) => false | void;
}
export declare class ContextMenu extends Component {
    private context;
    hide: () => void;
    show(x: number, y: number, actions: Array<false | Action>, zIndex?: number): void;
    constructor(editor: IViewBased);
    destruct(): void;
}
