/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { Plugin } from '../../modules/Plugin';
export declare class pasteStorage extends Plugin {
    private currentIndex;
    private list;
    private container;
    private listBox;
    private previewBox;
    private dialog;
    private paste;
    private onKeyDown;
    private selectIndex;
    private showDialog;
    private createDialog;
    afterInit(): void;
    beforeDestruct(): void;
}
