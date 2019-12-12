/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IDictionary, IViewOptions } from './types';
import { Buttons, Controls, IControlType } from './types/toolbar';
export declare class Config implements IViewOptions {
    iframe: boolean;
    commandToHotkeys: IDictionary<string | string[]>;
    license: string;
    preset: string;
    presets: IDictionary<any>;
    ownerDocument: Document;
    ownerWindow: Window;
    zIndex: number;
    readonly: boolean;
    disabled: boolean;
    activeButtonsInReadOnly: string[];
    toolbarButtonSize: 'small' | 'middle' | 'large';
    allowTabNavigation: boolean;
    inline: boolean;
    theme: string;
    saveModeInStorage: boolean;
    saveHeightInStorage: boolean;
    spellcheck: boolean;
    editorCssClass: false | string;
    style: false | IDictionary;
    triggerChangeEvent: boolean;
    width: number | string;
    minWidth: number | string;
    maxWidth: number | string;
    height: string | number;
    minHeight: number | string;
    direction: string;
    language: string;
    debugLanguage: boolean;
    i18n: false;
    tabIndex: number;
    toolbar: boolean | string | HTMLElement;
    showTooltip: boolean;
    showTooltipDelay: number;
    useNativeTooltip: boolean;
    enter: 'p' | 'div' | 'br';
    enterBlock: 'p' | 'div';
    defaultMode: number;
    useSplitMode: boolean;
    colors: IDictionary<string[]> | string[];
    colorPickerDefaultTab: 'background' | 'color';
    imageDefaultWidth: number;
    removeButtons: string[];
    disablePlugins: string[] | string;
    extraButtons: Array<string | IControlType>;
    sizeLG: number;
    sizeMD: number;
    sizeSM: number;
    buttons: Buttons;
    buttonsMD: Buttons;
    buttonsSM: Buttons;
    buttonsXS: Buttons;
    controls: Controls;
    events: IDictionary<(...args: any[]) => any>;
    textIcons: boolean;
    showBrowserColorPicker: boolean;
    private static __defaultOptions;
    static get defaultOptions(): Config;
}
export declare const OptionsDefault: any;
