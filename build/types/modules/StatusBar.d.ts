/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { Component } from './Component';
import { IJodit, IStatusBar } from '../types';
export declare class StatusBar extends Component implements IStatusBar {
    readonly target: HTMLElement;
    container: HTMLElement;
    hide(): void;
    show(): void;
    getHeight(): number;
    append(child: HTMLElement, inTheRight?: boolean): void;
    constructor(jodit: IJodit, target: HTMLElement);
    destruct(): void;
}
