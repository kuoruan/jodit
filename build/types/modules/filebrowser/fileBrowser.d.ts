/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { Dialog } from '../dialog/dialog';
import { IFileBrowser, IFileBrowserCallBackData, IFileBrowserOptions, IFileBrowserState, IFileBrowserDataProvider } from '../../types/fileBrowser';
import { IUploader } from '../../types/uploader';
import { ViewWithToolbar } from '../view/viewWithToolbar';
import { IJodit, IStorage } from '../../types';
import './config';
import { ObserveObject } from '../events/observeObject';
export declare class FileBrowser extends ViewWithToolbar implements IFileBrowser {
    get defaultTimeout(): number;
    private loader;
    private browser;
    private status_line;
    private tree;
    private files;
    state: IFileBrowserState & ObserveObject;
    dataProvider: IFileBrowserDataProvider;
    private statusTimer;
    loadItems(path?: string, source?: string): Promise<any>;
    loadTree(): Promise<any>;
    deleteFile(name: string, source: string): Promise<any>;
    private generateFolderTree;
    private generateItemsList;
    private onSelect;
    private errorHandler;
    options: IFileBrowserOptions;
    dialog: Dialog;
    storage: IStorage;
    uploader: IUploader;
    isOpened(): boolean;
    status: (message: string | Error, success?: boolean | undefined) => void;
    close: () => void;
    open: (callback: (data: IFileBrowserCallBackData) => void, onlyImages?: boolean) => Promise<void>;
    openImageEditor: (href: string, name: string, path: string, source: string, onSuccess?: (() => void) | undefined, onFailed?: ((error: Error) => void) | undefined) => Promise<Dialog>;
    private elementsMap;
    private elementToItem;
    private stateToView;
    private initEventsListeners;
    private initNativeEventsListeners;
    private initUploader;
    constructor(editor?: IJodit, options?: IFileBrowserOptions);
    destruct(): void;
}
