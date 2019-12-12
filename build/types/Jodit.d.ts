/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { Config } from './Config';
import { JoditArray } from './modules/helpers/JoditArray';
import { JoditObject } from './modules/helpers/JoditObject';
import { Observer } from './modules/observer/observer';
import { Select } from './modules/Selection';
import { StatusBar } from './modules/StatusBar';
import { CustomCommand, IDictionary, IPlugin, Modes } from './types';
import { ViewWithToolbar } from './modules/view/viewWithToolbar';
import { IJodit, IFileBrowser, IUploader } from './types/';
export declare class Jodit extends ViewWithToolbar implements IJodit {
    get isJodit(): true;
    get value(): string;
    set value(html: string);
    get defaultTimeout(): number;
    static Array(array: any[]): JoditArray;
    static Object(object: any): JoditObject;
    static fireEach(events: string, ...args: any[]): void;
    static make(element: HTMLInputElement | string, options?: object): Jodit;
    static defaultOptions: Config;
    static plugins: any;
    static modules: any;
    static instances: IDictionary<Jodit>;
    static lang: any;
    private __defaultStyleDisplayKey;
    private __defaultClassesKey;
    private commands;
    private __selectionLocked;
    private __wasReadOnly;
    editorDocument: HTMLDocument;
    editorWindow: Window;
    storage: import("./types").IStorage<import("./types").StorageValueType>;
    editorIsActive: boolean;
    workplace: HTMLDivElement;
    statusbar: StatusBar;
    observer: Observer;
    element: HTMLElement;
    editor: HTMLDivElement | HTMLBodyElement;
    iframe: HTMLIFrameElement | null;
    options: Config;
    selection: Select;
    get uploader(): IUploader;
    get filebrowser(): IFileBrowser;
    helper: any;
    __plugins: IDictionary<IPlugin>;
    mode: Modes;
    getElementValue(): string;
    getNativeEditorValue(): string;
    setNativeEditorValue(value: string): void;
    getEditorValue(removeSelectionMarkers?: boolean): string;
    getEditorText(): string;
    setElementValue(value?: string): void;
    private __callChangeCount;
    setEditorValue(value?: string): void;
    registerCommand(commandNameOriginal: string, command: CustomCommand<IJodit>): IJodit;
    registerHotkeyToCommand(hotkeys: string | string[], commandName: string): void;
    execCommand(command: string, showUI?: any, value?: null | any): any;
    private execCustomCommands;
    lock(name?: string): boolean;
    unlock(): boolean;
    getMode(): Modes;
    isEditorMode(): boolean;
    getRealMode(): Modes;
    setMode(mode: number | string): void;
    toggleMode(): void;
    setDisabled(isDisabled: boolean): void;
    getDisabled(): boolean;
    setReadOnly(isReadOnly: boolean): void;
    getReadOnly(): boolean;
    beforeInitHook(): any;
    afterInitHook(): any;
    private resolveElement;
    constructor(element: HTMLInputElement | string, options?: object);
    private makeToolbar;
    private applyOptionsToToolbarContainer;
    isInited: boolean;
    private __initPlugines;
    private __initEditor;
    private __createEditor;
    destruct(): void;
}
