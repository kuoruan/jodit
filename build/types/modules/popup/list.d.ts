/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IControlTypeStrong, IToolbarCollection } from '../../types/toolbar';
import { IViewBased } from '../../types/view';
import { Popup } from './popup';
export declare class PopupList extends Popup {
    readonly target: HTMLElement;
    readonly current?: HTMLElement | undefined;
    readonly className: string;
    private defaultControl;
    protected doClose(): void;
    doOpen(control: IControlTypeStrong): void;
    toolbar: IToolbarCollection;
    firstInFocus(): void;
    constructor(jodit: IViewBased, target: HTMLElement, current?: HTMLElement | undefined, className?: string);
    destruct(): void;
}
