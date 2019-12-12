/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IJodit } from '../types/jodit';
import { IDictionary, IFileBrowserCallBackData } from '../types/';
export declare namespace Widget {
    export const ColorPickerWidget: (editor: IJodit, callback: (newColor: string) => void, coldColor: string) => HTMLDivElement;
    export const TabsWidget: (editor: IJodit, tabs: IDictionary<HTMLElement | (() => void)>, state?: {
        __activeTab: string;
    } | undefined) => HTMLDivElement;
    interface ImageSelectorCallbacks {
        url?: (this: IJodit, url: string, alt: string) => void;
        filebrowser?: (data: IFileBrowserCallBackData) => void;
        upload?: ((this: IJodit, data: IFileBrowserCallBackData) => void) | true;
    }
    export const FileSelectorWidget: (editor: IJodit, callbacks: ImageSelectorCallbacks, elm: HTMLElement | null, close: () => void, isImage?: boolean) => HTMLDivElement;
    export {};
}
