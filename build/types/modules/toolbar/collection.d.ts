/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IToolbarCollection } from '../../types';
import { Buttons } from '../../types/toolbar';
import { IViewBased } from '../../types/view';
import { ToolbarButton } from './button';
import { ToolbarElement } from './element';
import { Component } from '../Component';
export declare class ToolbarCollection<T extends IViewBased = IViewBased> extends Component<T> implements IToolbarCollection {
    private __buttons;
    private __getControlType;
    private closeAll;
    private initEvents;
    readonly listenEvents: string;
    getButtonsList(): string[];
    private __parentContainer;
    getParentContainer(): HTMLElement;
    appendChild(button: ToolbarElement): void;
    get firstButton(): ToolbarElement;
    removeChild(button: ToolbarElement): void;
    build(buttons: Buttons, parentContainer: HTMLElement, target?: HTMLElement): void;
    clear(): void;
    immediateCheckActiveButtons: () => void;
    buttonIsActive(button: ToolbarButton): boolean | void;
    buttonIsDisabled(button: ToolbarButton): boolean | void;
    getTarget(button: ToolbarButton): Node | void;
    checkActiveButtons: (this: void) => void;
    container: HTMLElement;
    setDirection(direction: 'rtl' | 'ltr'): void;
    constructor(jodit: IViewBased);
    destruct(): void;
}
