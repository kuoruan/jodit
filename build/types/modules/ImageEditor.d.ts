/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { ImageEditorActionBox, ImageEditorOptions } from '../types';
import { IViewBased } from '../types/view';
import { Component } from './Component';
import { Dialog } from './dialog/';
declare module '../Config' {
    interface Config {
        imageeditor: ImageEditorOptions;
    }
}
export declare class ImageEditor extends Component {
    private resizeUseRatio;
    private cropUseRatio;
    private dialog;
    private image;
    private cropImage;
    private clicked;
    private target;
    private start_x;
    private start_y;
    private top_x;
    private top_y;
    private width;
    private height;
    private activeTab;
    private naturalWidth;
    private naturalHeight;
    private ratio;
    private new_h;
    private new_w;
    private diff_x;
    private diff_y;
    private buttons;
    private editor;
    private widthInput;
    private heightInput;
    private resize_box;
    private crop_box;
    private sizes;
    private resizeHandler;
    private cropHandler;
    private cropBox;
    private resizeBox;
    private calcValueByPercent;
    private calcCropBox;
    private showCrop;
    private updateCropBox;
    private updateResizeBox;
    private setHandlers;
    options: ImageEditorOptions;
    onSave: (name: void | string, data: ImageEditorActionBox, hide: () => void, failed: (e: Error) => void) => void;
    hide: () => void;
    open: (url: string, save: (newname: string | void, box: ImageEditorActionBox, success: () => void, failed: (error: Error) => void) => void) => Promise<Dialog>;
    constructor(editor: IViewBased);
    destruct(): any;
}
