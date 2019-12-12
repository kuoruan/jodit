/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2019 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
import { IDictionary } from './types';
export declare const INVISIBLE_SPACE = "\uFEFF";
export declare const INVISIBLE_SPACE_REG_EXP: RegExp;
export declare const INVISIBLE_SPACE_REG_EXP_END: RegExp;
export declare const INVISIBLE_SPACE_REG_EXP_START: RegExp;
export declare const SPACE_REG_EXP: RegExp;
export declare const SPACE_REG_EXP_START: RegExp;
export declare const SPACE_REG_EXP_END: RegExp;
export declare const IS_BLOCK: RegExp;
export declare const IS_INLINE: RegExp;
export declare const MAY_BE_REMOVED_WITH_KEY: RegExp;
export declare const KEY_BACKSPACE = 8;
export declare const KEY_TAB = 9;
export declare const KEY_ENTER = 13;
export declare const KEY_ESC = 27;
export declare const KEY_LEFT = 37;
export declare const KEY_UP = 38;
export declare const KEY_RIGHT = 39;
export declare const KEY_DOWN = 40;
export declare const KEY_DELETE = 46;
export declare const KEY_F = 70;
export declare const KEY_R = 82;
export declare const KEY_H = 72;
export declare const KEY_Y = 89;
export declare const KEY_V = 86;
export declare const KEY_Z = 90;
export declare const KEY_F3 = 114;
export declare const NEARBY = 5;
export declare const ACCURACY = 10;
export declare const COMMAND_KEYS: number[];
export declare const BR = "br";
export declare const PARAGRAPH = "p";
export declare const MODE_WYSIWYG = 1;
export declare const MODE_SOURCE = 2;
export declare const MODE_SPLIT = 3;
export declare const IS_IE: boolean;
export declare const URL_LIST: string;
export declare const TEXT_PLAIN: string;
export declare const TEXT_HTML: string;
export declare const MARKER_CLASS = "jodit_selection_marker";
export declare const EMULATE_DBLCLICK_TIMEOUT = 300;
export declare const JODIT_SELECTED_CELL_MARKER = "data-jodit-selected-cell";
export declare const INSERT_AS_HTML = "insert_as_html";
export declare const INSERT_CLEAR_HTML = "insert_clear_html";
export declare const INSERT_AS_TEXT = "insert_as_text";
export declare const INSERT_ONLY_TEXT = "insert_only_text";
export declare const IS_MAC: boolean;
export declare const KEY_ALIASES: IDictionary<string>;
