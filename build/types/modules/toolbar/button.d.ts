/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IControlTypeStrong, IToolbarButton, IToolbarCollection } from '../../types/toolbar';
import { ToolbarElement } from './element';
import { IViewBased } from '../../types';
export declare class ToolbarButton extends ToolbarElement implements IToolbarButton {
    set disable(disable: boolean);
    get disable(): boolean;
    set active(enable: boolean);
    get active(): boolean;
    private __disabled;
    private __actived;
    private tooltip;
    readonly control: IControlTypeStrong;
    readonly target: HTMLElement | undefined;
    textBox: HTMLSpanElement;
    anchor: HTMLAnchorElement;
    isDisable(): boolean;
    isActive(): boolean;
    private onMouseDown;
    get tooltipText(): string;
    focus(): void;
    constructor(parentToolbarOrView: IToolbarCollection | IViewBased, control: IControlTypeStrong, target?: HTMLElement);
    destruct(): void;
}
