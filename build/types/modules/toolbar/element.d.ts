/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IControlTypeStrong, IToolbarCollection, IToolbarElement } from '../../types/toolbar';
import { Component } from '../Component';
import { IViewBased, TagNames } from '../../types';
export declare abstract class ToolbarElement extends Component implements IToolbarElement {
    container: HTMLElement;
    parentToolbar?: IToolbarCollection;
    protected constructor(parentToolbarOrView: IToolbarCollection | IViewBased, containerTag?: TagNames, containerClass?: string);
    focus(): void;
    destruct(): any;
    createIcon(clearName: string, control?: IControlTypeStrong): HTMLElement;
}
