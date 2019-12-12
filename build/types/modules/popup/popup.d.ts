/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license;
 * Copyright 2013-2019 Valeriy Chupurnov https://xdsoft.net
 */
import { IViewBased } from '../../types/view';
import { Component } from '../Component';
import { IControlTypeStrong, IPopup } from '../../types';
export declare class Popup extends Component implements IPopup {
    readonly target: HTMLElement;
    readonly current?: HTMLElement | undefined;
    readonly className: string;
    private calcPosition;
    private throttleCalcPosition;
    protected doOpen(content: string | HTMLElement | IControlTypeStrong): void;
    protected doClose(): void;
    isOpened: boolean;
    open(content: string | HTMLElement | IControlTypeStrong, rightAlign?: boolean, noStandardActions?: boolean): void;
    close: (current?: HTMLElement | Popup | undefined) => void;
    container: HTMLElement;
    constructor(jodit: IViewBased, target: HTMLElement, current?: HTMLElement | undefined, className?: string);
    firstInFocus(): void;
    destruct(): void;
}
