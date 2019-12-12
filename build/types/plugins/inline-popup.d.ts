/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { Plugin } from '../modules/Plugin';
import { IDictionary, IJodit } from '../types';
import { IControlType } from '../types/toolbar';
declare module '../Config' {
    interface Config {
        popup: IDictionary<Array<IControlType | string>>;
        toolbarInline: boolean;
        toolbarInlineDisableFor: string | string[];
    }
}
export declare class inlinePopup extends Plugin {
    private toolbar;
    private popup;
    private target;
    private targetContainer;
    private container;
    private _hiddenClass;
    private __getRect;
    private isSelectionStarted;
    private onSelectionEnd;
    private isTargetAction;
    private isSelectionPopup;
    private calcWindSizes;
    private calcPosition;
    private isExcludedTarget;
    private reCalcPosition;
    private showPopup;
    private hidePopup;
    private onSelectionStart;
    private hideIfCollapsed;
    private checkIsTargetEvent;
    isOpened: boolean;
    onChangeSelection: () => void;
    afterInit(editor: IJodit): void;
    beforeDestruct(editor: IJodit): void;
}
